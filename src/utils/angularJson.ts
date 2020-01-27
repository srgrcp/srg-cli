import * as fs from 'fs'
import { IAngularJson, Projects } from 'src/interfaces/iAngularJson'

export class AngularJson {
    private _angularJsonPath: string = './angular.json'
    private _angularJson: IAngularJson | undefined
    private _projects: Projects | undefined
    private _defaultProject: string | undefined
    private _error: any

    constructor(angularJsonPath?: string) {
        if (angularJsonPath){
            this._angularJsonPath = angularJsonPath
        }
    }

    get AngularJson(): IAngularJson | undefined { return this._angularJson }
    get Projects(): Projects | undefined { return this._projects }
    get DefaultProject(): string | undefined { return this._defaultProject }
    get Error(): any { return this._error }

    public GetJson = () => {
        let jsonString: string | undefined
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
