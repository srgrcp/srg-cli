import { ICommand } from 'src/interfaces/iCommand';
import { IParams } from 'src/interfaces/iParams';
import { AngularJson } from 'src/utils/angularJson';

export class InitCommand implements ICommand {
    private params: IParams
    private angularJson: AngularJson

    constructor(params: IParams, angularJson: AngularJson) {
        this.params = params
        this.angularJson = angularJson
    }

    public Run = () => {
        // TODO
    }
}
