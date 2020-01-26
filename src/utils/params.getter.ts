import { IParams } from '../interfaces/iParams'
import 'colors'

/**
 * Get command and options.
 */
export class ParamsGetter implements IParams {
    private _command: string
    private _angularJson: string = './angular.json'
    private nodeBin: string
    private mainPath: string
    private args: string[]

    constructor(){
        [this.nodeBin, this.mainPath, ...this.args] = process.argv
    }

    get Command(): string { return this._command }
    /**
     * CLI option to set angular.json path.
     * @description option: --angular-json,
     * alias: -a
     * @default './angular.json'
     * @example srg init --angular-json './angular.json'
     */
    get AngularJson(): string { return this._angularJson }
    get NodeBin(): string { return this.nodeBin }
    get MainPath(): string { return this.mainPath }

    private getParam = (paramList: string[]) => {
        const firstArg: string = paramList[0]
        if (firstArg.startsWith('-')){
            switch (firstArg) {
                case '-a':
                case '--angular-json':
                    const angularJson = paramList[1]
                    if (!angularJson.startsWith('-')){
                        this._angularJson = angularJson
                        paramList.splice(0, 2)
                    }
                    break;
                default:
                    paramList.shift()
                    break;
            }
        } else if (this._command === undefined) {
            this._command = firstArg
            paramList.shift()
        } else {
            console.error('Error:'.red, 'There are more than one command.')
            process.exit(0)
        }
    }

    public GetParams = () => {
        const paramsList = [...this.args]
        console.log(paramsList)
        while (paramsList.length){
            this.getParam(paramsList)
        }
        console.log(this._command, this._angularJson)
    }

}
