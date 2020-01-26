export interface IAngularJson {
    $schema?: string;
    cli?: CliOptions;
    /**
     * Default project name used in commands.
     */
    defaultProject?: string;
    /**
     * Path where new projects will be created.
     */
    newProjectRoot?: string;
    projects?: Projects;
    schematics?: SchematicOptions;
    version: number;
}
export interface CliOptions {
    /**
     * Share anonymous usage data with the Angular Team at Google.
     */
    analytics?: boolean;
    /**
     * The default schematics collection to use.
     */
    defaultCollection?: string;
    /**
     * Specify which package manager tool to use.
     */
    packageManager?: PackageManager;
    /**
     * Control CLI specific console warnings
     */
    warnings?: Warnings;
}
/**
 * Specify which package manager tool to use.
 */
export declare enum PackageManager {
    Cnpm = "cnpm",
    Npm = "npm",
    Pnpm = "pnpm",
    Yarn = "yarn"
}
/**
 * Control CLI specific console warnings
 */
export interface Warnings {
    /**
     * Show a warning when the TypeScript version is incompatible.
     */
    typescriptMismatch?: boolean;
    /**
     * Show a warning when the global version is newer than the local one.
     */
    versionMismatch?: boolean;
}
export interface Projects {
    [key: string]: Project;
}
export interface SchematicOptions {
    "@schematics/angular:class"?: SchematicsAngularClass;
    "@schematics/angular:component"?: SchematicsAngularComponent;
    "@schematics/angular:directive"?: SchematicsAngularDirective;
    "@schematics/angular:module"?: SchematicsAngularModule;
    "@schematics/angular:pipe"?: SchematicsAngularPipe;
    "@schematics/angular:service"?: SchematicsAngularService;
}
export interface SchematicsAngularClass {
    /**
     * When true, does not create test files.
     */
    skipTests?: boolean;
    /**
     * Specifies if a spec file is generated.
     */
    spec?: boolean;
}
export interface SchematicsAngularComponent {
    /**
     * Specifies the change detection strategy.
     */
    changeDetection?: ChangeDetection;
    /**
     * Specifies if the component is an entry component of declaring module.
     */
    entryComponent?: boolean;
    /**
     * Specifies if declaring module exports the component.
     */
    export?: boolean;
    /**
     * Flag to indicate if a directory is created.
     */
    flat?: boolean;
    /**
     * Specifies if the style will be in the ts file.
     */
    inlineStyle?: boolean;
    /**
     * Specifies if the template will be in the ts file.
     */
    inlineTemplate?: boolean;
    /**
     * Allows specification of the declaring module.
     */
    module?: string;
    /**
     * The prefix to apply to generated selectors.
     */
    prefix?: string;
    /**
     * The selector to use for the component.
     */
    selector?: string;
    /**
     * Flag to skip the module import.
     */
    skipImport?: boolean;
    /**
     * Specifies if a spec file is generated.
     */
    spec?: boolean;
    /**
     * The file extension or preprocessor to use for style files.
     */
    style?: Style;
    /**
     * The file extension to be used for style files.
     */
    styleext?: string;
    /**
     * Specifies the view encapsulation strategy.
     */
    viewEncapsulation?: ViewEncapsulation;
}
/**
 * Specifies the change detection strategy.
 */
export declare enum ChangeDetection {
    Default = "Default",
    OnPush = "OnPush"
}
/**
 * The file extension or preprocessor to use for style files.
 */
export declare enum Style {
    Css = "css",
    Less = "less",
    Sass = "sass",
    Scss = "scss",
    Styl = "styl"
}
/**
 * Specifies the view encapsulation strategy.
 */
export declare enum ViewEncapsulation {
    Emulated = "Emulated",
    Native = "Native",
    None = "None",
    ShadowDom = "ShadowDom"
}
export interface SchematicsAngularDirective {
    /**
     * Specifies if declaring module exports the directive.
     */
    export?: boolean;
    /**
     * Flag to indicate if a directory is created.
     */
    flat?: boolean;
    /**
     * Allows specification of the declaring module.
     */
    module?: string;
    /**
     * The prefix to apply to generated selectors.
     */
    prefix?: string;
    /**
     * The selector to use for the directive.
     */
    selector?: string;
    /**
     * Flag to skip the module import.
     */
    skipImport?: boolean;
    /**
     * When true, does not create test files.
     */
    skipTests?: boolean;
    /**
     * Specifies if a spec file is generated.
     */
    spec?: boolean;
}
export interface SchematicsAngularModule {
    /**
     * Flag to control whether the CommonModule is imported.
     */
    commonModule?: boolean;
    /**
     * Flag to indicate if a directory is created.
     */
    flat?: boolean;
    /**
     * Allows specification of the declaring module.
     */
    module?: string;
    /**
     * Generates a routing module.
     */
    routing?: boolean;
    /**
     * The scope for the generated routing.
     */
    routingScope?: RoutingScope;
}
/**
 * The scope for the generated routing.
 */
export declare enum RoutingScope {
    Child = "Child",
    Root = "Root"
}
export interface SchematicsAngularPipe {
    /**
     * Specifies if declaring module exports the pipe.
     */
    export?: boolean;
    /**
     * Flag to indicate if a directory is created.
     */
    flat?: boolean;
    /**
     * Allows specification of the declaring module.
     */
    module?: string;
    /**
     * Allows for skipping the module import.
     */
    skipImport?: boolean;
    /**
     * When true, does not create test files.
     */
    skipTests?: boolean;
    /**
     * Specifies if a spec file is generated.
     */
    spec?: boolean;
}
export interface SchematicsAngularService {
    /**
     * Flag to indicate if a directory is created.
     */
    flat?: boolean;
    /**
     * When true, does not create test files.
     */
    skipTests?: boolean;
    /**
     * Specifies if a spec file is generated.
     */
    spec?: boolean;
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