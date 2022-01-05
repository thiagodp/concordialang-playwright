import { TestScriptExecutionOptions } from "concordialang-plugin";
import { TestScriptExecutionResult } from 'concordialang-types';

export async function exec( options: TestScriptExecutionOptions ): Promise< TestScriptExecutionResult > {
    console.log( '[[ TO-DO: execute scripts with Playwright ]]');
    const r = {} as TestScriptExecutionResult;
    return r;
}
