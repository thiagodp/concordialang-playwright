import { Options } from "./options";

export interface RunnerDef {
    installationPackages: () => string[],
    fileExtension: ( options?: Options ) => string,
    templateContent: ( options?: Options ) => string,
}
