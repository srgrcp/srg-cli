interface IAngularJson {
    '$schema': string;
    version: number;
    newProjectRoot: string;
    projects: Projects;
    defaultProject: string;
}

interface Projects {
    [key: string]: Project;
}

interface Project {
    root: string;
    sourceRoot: string;
    projectType: string;
    prefix: string;
    schematics: Schematics;
    architect: Architect;
}

interface Architect {
    build: Build;
    serve: Serve;
    'extract-i18n': Extracti18n;
    test: Test;
    lint: Lint;
}

interface Lint {
    builder: string;
    options: Options4;
}

interface Options4 {
    tsConfig: string[];
    exclude: string[];
}

interface Test {
    builder: string;
    options: Options3;
}

interface Options3 {
    main: string;
    polyfills: string;
    tsConfig: string;
    karmaConfig: string;
    styles: string[];
    scripts: any[];
    assets: string[];
}

interface Extracti18n {
    builder: string;
    options: Options2;
}

interface Serve {
    builder: string;
    options: Options2;
    configurations: Configurations2;
}

interface Configurations2 {
    production: Options2;
}

interface Options2 {
    browserTarget: string;
}

interface Build {
    builder: string;
    options: Options;
    configurations: Configurations;
}

interface Configurations {
    production: Production;
}

interface Production {
    fileReplacements: FileReplacement[];
    optimization: boolean;
    outputHashing: string;
    sourceMap: boolean;
    extractCss: boolean;
    namedChunks: boolean;
    aot: boolean;
    extractLicenses: boolean;
    vendorChunk: boolean;
    buildOptimizer: boolean;
    budgets: Budget[];
}

interface Budget {
    type: string;
    maximumWarning: string;
    maximumError: string;
}

interface FileReplacement {
    replace: string;
    with: string;
}

interface Options {
    outputPath: string;
    index: string;
    main: string;
    polyfills: string;
    tsConfig: string;
    assets: string[];
    styles: string[];
    scripts: Script[];
    es5BrowserSupport: boolean;
    customWebpackConfig: CustomWebpackConfig;
}

interface CustomWebpackConfig {
    path: string;
    mergeStrategies: MergeStrategies;
}

interface MergeStrategies {
    externals: string;
}

interface Script {
    input: string;
}

interface Schematics {
    '@schematics/angular:component': Schematicsangularcomponent;
}

interface Schematicsangularcomponent {
    style: string;
}