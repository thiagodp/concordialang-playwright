import { Plugin as ConcordiaPlugin } from 'concordialang-plugin';
import { exec } from './exec.js';
import { generate } from './gen.js';
import { convert } from './report.js';
export declare class PlaywrightPlugin implements ConcordiaPlugin {
    /** @inheritdoc */
    generateCode: typeof generate;
    /** @inheritdoc */
    executeCode: typeof exec;
    /** @inheritdoc */
    convert: typeof convert;
    /** @inheritdoc */
    defaultReportFile: () => Promise<string>;
}
declare const plugin: PlaywrightPlugin;
export default plugin;
