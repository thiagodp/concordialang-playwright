import colors from 'ansi-colors';
import {
    AbstractTestScript,
    ATSCommand,
    TestScriptGenerationOptions,
    TestScriptGenerationResult,
} from 'concordialang-plugin';
import { render } from 'mustache';
import { relative } from 'path';

import { CommandMapper } from './command-mapper';
import { COMMANDS } from './commands';
import { ensureSourceCodeFileDirectory, makeSourceCodeFilePath, saveFile } from './infra';
import { warn } from './output';
import { runnerDef } from './runners';
import { Options } from './runners/options';

export async function generate(
    abstractTestScripts: AbstractTestScript[],
    options: TestScriptGenerationOptions
): Promise< TestScriptGenerationResult > {

    options = { sourceCodeDir: '.', specificationDir: './feature', ...options  } as TestScriptGenerationOptions

    const runner = runnerDef( 'playwright' ); // TODO: read runner name from config
    const runnerOptions: Options = { browser: 'chromium', useTypescript: false }; // TODO: read runner options from config
    const templateStr = runner.templateContent( runnerOptions );
    const fileExtension: string = runner.fileExtension( runnerOptions );

    const errors: Error[] = [];
    const mapper = new CommandMapper( COMMANDS );

    let files: string[] = [];
    for ( let ats of abstractTestScripts || [] ) {

        const outputFilePath: string = makeSourceCodeFilePath(
            options.sourceCodeDir!, ats.sourceFile, options.specificationDir!, fileExtension );

        try {
            ensureSourceCodeFileDirectory( outputFilePath );
            const sourceCode: string = generateSourceCode( options.specificationDir!, templateStr, mapper, ats );
            await saveFile( outputFilePath, sourceCode );
            files.push( outputFilePath );
        } catch ( e: any ) {
            const msg = 'Error generating script for "' + ats.sourceFile + '": ' + e.message;
            errors.push( new Error( msg ) );
        }
    }

    return { generatedFiles: files, errors: errors } as TestScriptGenerationResult;
}



function generateSourceCode( specificationDir: string, template: string, mapper: CommandMapper, ats: AbstractTestScript ): string {

    let obj: any = { ...ats }; // clone

    for ( let test of ( obj.testcases || [] ) ) {
        test.convertedCommands = [];
        for ( let cmd of ( test.commands || [] ) ) {
            const converted: string[] = analyzeConverted( specificationDir, mapper, cmd, ats );
            test.convertedCommands.push.apply( test.convertedCommands, converted );
        }
    }

    const events = [ 'beforeFeature', 'afterFeature', 'beforeEachScenario', 'afterEachScenario' ];
    for ( let eventStr of events ) {
        let event = obj[ eventStr ];
        if ( ! event ) { // Not found in the supported ones
            continue;
        }
        event.convertedCommands = [];
        for ( let cmd of ( event.commands || [] ) ) {
            const converted: string[] = analyzeConverted( specificationDir, mapper, cmd, ats );
            event.convertedCommands.push.apply( event.convertedCommands, converted );
        }
    }

    return render( template, obj ); // mustache's renderer
}


function analyzeConverted(
    specificationDir: string,
    mapper: CommandMapper,
    cmd: ATSCommand,
    ats: AbstractTestScript
): string[] {
    const converted = mapper.map( cmd );
    if ( ats && cmd && converted && 0 === converted.length ) {

        const filePath = relative( specificationDir, ats.sourceFile );
        couldNotConvertCommand( filePath, cmd.location );

        return [ mapper.makeCommentWithCommand( cmd ) ];
    }
    return converted || [];
}


function couldNotConvertCommand( filePath: string, location?: { line: number, column: number } ): void {
    warn(
        'Plug-in could not convert command from',
        colors.yellowBright( filePath ),
        location ? '(' + location.line + ',' + location.column + ')' : ''
    );
}
