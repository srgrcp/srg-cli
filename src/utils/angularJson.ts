import * as fs from 'fs'

export class AngularJson {
    private _angularJsonPath: string = './angular.json'
    private _angularJson: IAngularJson
    private _projects: Projects
    private _defaultProject: string
    private _error: any
    
    constructor(angularJsonPath?: string) {
        if (angularJsonPath){
            this._angularJsonPath = angularJsonPath
        }
    }

    get AngularJson(): IAngularJson { return this._angularJson }
    get Projects(): Projects { return this._projects }
    get DefaultProject(): string { return this._defaultProject }
    get Error(): any { return this._error }

    public GetJson = () => {
        let jsonString: string
        let fileError: any
        try {
            jsonString = fs.readFileSync(this._angularJsonPath) as unknown as string
        } catch (_error) {
            jsonString = undefined    
            fileError = _error
        }
        this._angularJson = jsonString? JSON.parse(jsonString): undefined
        this._projects = this._angularJson? this._angularJson.projects: undefined
        this._defaultProject = this._angularJson? this._angularJson.defaultProject: undefined
        this._error = fileError
    }
}
