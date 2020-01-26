import { ICommand } from 'src/interfaces/iCommand';
import { IParams } from 'src/interfaces/iParams';

export class InitCommand implements ICommand {
    private params: IParams

    constructor(params: IParams) {
        this.params = params
    }

    public Run = () => {
        // TODO
    }
}
