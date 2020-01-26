import { IParams } from '../interfaces/iParams'
import { ParamValueGetter } from './paramValueGetter'
import 'colors'

/**
 * Get command and options.
 * @todo applicationsRoot, microAppsRoot, librariesRoot
 * @todo declare interface properties first
 */
export class ParamsGetter implements IParams {

    // Options
    private command: string
    private angularJson: string = './angular.json'
    private clearRepository: Boolean = false

    private nodeBin: string
    private mainPath: string
    private args: string[]

    constructor(){
        [this.nodeBin, this.mainPath, ...this.args] = process.argv
    }

    // Options
    get Command(): string { return this.command }
    /**
     * CLI option to set angular.json path.
     * @description option: --angular-json,
     * alias: -a
     * @default './angular.json'
     * @example srg init --angular-json './angular.json'
     */
    get AngularJson(): string { return this.angularJson }
    /**
     * Cleans all existing projects of repository.
     */
    get ClearRepository(): Boolean { return this.clearRepository }

    get NodeBin(): string { return this.nodeBin }
    get MainPath(): string { return this.mainPath }

    private getParam = (paramList: string[]) => {
        const param: string = paramList[0]
        if (param.startsWith('-')){
            let value
            let paramValueGetter
            switch (param) {
                case '-a':
                case '--angular-json':
                    value = paramList[1]
                    paramValueGetter = new ParamValueGetter(param, value, true, paramList)
                    this.angularJson = paramValueGetter.GetValue()
                    break;
                case '-c':
                case '--clear-repository':
                    value = paramList[1]
                    paramValueGetter = new ParamValueGetter(param, value, false, paramList)
                    this.clearRepository = paramValueGetter.GetValue()
                    break;
                default:
                    paramList.shift()
                    break;
            }
        } else if (this.command === undefined) {
            this.command = param
            paramList.shift()
        } else {
            console.error('Error:'.red, 'There are more than one command.')
            process.exit(0)
        }
    }

    public GetParams = () => {
        const paramsList = [...this.args]
        while (paramsList.length){
            this.getParam(paramsList)
        }
    }

}
