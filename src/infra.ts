import { writeFile } from 'fs';
import * as fse from 'fs-extra';
import { basename, dirname, join, relative, resolve } from 'path';
import { promisify } from 'util';

/**
 * Creates a test script file path, according to the given specification file and output directory.
 *
 * The corresponding directories under output directory are also created.
 *
 * @param outputDirectory Target directory, e.g. `tests`
 * @param specificationFilePath Specification file, e.g. `path/to/features/sub1/sub2/f1.testcase`
 * @param specificationBaseDirectory Base specification directory, e.g. `path/to/features/`
 */
export function makeSourceCodeFilePath(
    outputDirectory: string,
    specificationFilePath: string,
    specificationBaseDirectory: string,
    fileExtension: string
): string {
    const relativeSpecFilePath: string = relative( specificationBaseDirectory, specificationFilePath );
    const correspondingOutputDir: string = resolve( outputDirectory, dirname( relativeSpecFilePath ) );
    const fileName: string = basename( relativeSpecFilePath, '.testcase' ) + fileExtension;
    const filePath: string = join( correspondingOutputDir, fileName );
    return filePath;
}


export function ensureSourceCodeFileDirectory( filePath: string ): void {
    fse.mkdirsSync( dirname( filePath ) );
}


export async function saveFile( path: string, content: string ): Promise< void > {
    const write = promisify( writeFile );
    await write( path, content, { flag: 'w+' } );
}