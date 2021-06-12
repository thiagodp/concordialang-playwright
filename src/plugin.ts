import { Plugin as ConcordiaPlugin } from 'concordialang-plugin';
import { exec } from './exec.js';
import { generate } from './gen.js';
import { convert } from './report.js';

export class PlaywrightPlugin implements ConcordiaPlugin {

    /** @inheritdoc */
    generateCode = generate;

    /** @inheritdoc */
    executeCode = exec;

    /** @inheritdoc */
    convert = convert;

    /** @inheritdoc */
    defaultReportFile = async function defaultReportFile(): Promise< string > { return 'TO-DO'; };

    beforeReport = async () => console.log( '[beforeReport]' );
    afterReport = async () => console.log( '[afterReport]' );

}

const plugin = new PlaywrightPlugin();
export default plugin;