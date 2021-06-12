import { AbstractTestScript, TestScriptGenerationOptions, TestScriptGenerationResult } from 'concordialang-plugin';
export declare const header: () => string;
export declare const inclusions: (browser: string) => string;
export declare const beforeAllFn: () => string;
export declare const afterAllFn: () => string;
export declare const beforeEachFn: () => string;
export declare const afterEachFn: () => string;
export declare function generate(abstractTestScripts: AbstractTestScript[], options: TestScriptGenerationOptions): Promise<TestScriptGenerationResult>;
