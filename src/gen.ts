import { AbstractTestScript, TestScriptGenerationOptions, TestScriptGenerationResult } from 'concordialang-plugin';

export const header = () => `
//
// Generated with ❤ by Concordia Compiler plug-in for Playwright
// https://github.com/concordialang/playwright
//
`;

export const inclusions = ( browser: string ) => {
    return `
const { ${browser} } = require('playwright');
const browserRef = ${browser};
let browser;
let page;
`;
};

export const beforeAllFn = () =>
`async () => {
    browser = await browserRef.launch();
}`;

export const afterAllFn = () =>
`async () => {
    await browser.close();
}`;


export const beforeEachFn = () =>
`async () => {
    page = await browser.newPage();
}`;

export const afterEachFn = () =>
`async () => {
    await page.close();
}`;



export async function generate(
    abstractTestScripts: AbstractTestScript[],
    options: TestScriptGenerationOptions
): Promise< TestScriptGenerationResult > {
    const r = {} as TestScriptGenerationResult;
    return r;
}