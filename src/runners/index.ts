import playwrightDef from "./playwright-def";
import { RunnerDef } from "./runner-def";

export function runnerDef( runner: string ): RunnerDef {
    // if ( 'mocha' === runner ) {
    //     return mochaDef;
    // }
    return playwrightDef;
}
