import { Options } from "./options";

// exportable
const installationPackages = () => [ '@playwright/test' ];

// exportable
const fileExtension = ( options?: Options ) => options?.useTypescript ? '.spec.ts' : '.spec.js';

const tsImports = ( browser: string ) => [
    `import { test, expect } from '@playwright/test';`,
    `import { ${browser} } from 'playwright';`
];

const jsImports = ( browser: string ) => [
    `const { test, expect } = require('@playwright/test');`,
    `const { ${browser} } = require('playwright');`
];

const importFiles = ( options?: Options ) => options?.useTypescript ? tsImports( options?.browser ) : jsImports ( options?.browser );

// exportable
const templateContent = ( options?: Options ) => `
// Generated with ❤ by Concordia Compiler plug-in for Playwright
//
// source: {{{sourceFile}}}
//
// THIS IS A GENERATED FILE - MODIFICATIONS CAN BE LOST !

${importFiles(options).join('\n')}

test.describe("{{feature.name}}", () => {

    const browserRef = ${options?.browser};
    let browser;

    {{#beforeFeature}}
    test.beforeAll( async ({ page }) => { // Before Feature
        browser = await browserRef.launch();
        {{#convertedCommands}}
        {{{.}}}
        {{/convertedCommands}}
    });
    {{/beforeFeature}}
    {{#afterFeature}}

    test.afterAll( async ({ page }) => { // After Feature
        {{#convertedCommands}}
        {{{.}}}
        {{/convertedCommands}}
        await browser.close();
    });
    {{/afterFeature}}
    test.describe("{{scenario}}", () => {
        {{#beforeEachScenario}}

        test.beforeEach( async ({ page }) => { // Before Each Scenario
            {{#convertedCommands}}
            {{{.}}}
            {{/convertedCommands}}
        });
        {{/beforeEachScenario}}
        {{#afterEachScenario}}

        test.afterEach( async ({ page }) => { // After Each Scenario
            {{#convertedCommands}}
            {{{.}}}
            {{/convertedCommands}}
        });
        {{/afterEachScenario}}

        {{#testcases}}
        test("{{name}}", async ({ page }) =>
            {{#convertedCommands}}
            {{{.}}}
            {{/convertedCommands}}
        });

        {{/testcases}}
    });

});`;


export default {
    installationPackages,
    fileExtension,
    templateContent
};
