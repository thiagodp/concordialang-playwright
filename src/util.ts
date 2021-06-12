export const solveBrowser = ( browserName: string ) => {
    // Support for '_electron' and '_android' is still experimental and they provide different APIs
    if ( ! [ 'chromium', 'firefox', 'webkit' ].includes( browserName?.toLowerCase() ) ) {
        return 'chromium'; // default browser
    }
    return browserName?.toLowerCase();
}
