import { IParams } from 'src/interfaces/iParams'
import { AngularJson } from 'src/utils/angularJson'

export abstract class Command {
    private params: IParams
    private angularJson: AngularJson

    constructor(params: IParams, angularJson: AngularJson) {
        this.params = params
        this.angularJson = angularJson
    }
}