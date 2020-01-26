import { ParamsGetter } from './params.getter';

export class CommandHandler {
    private command: string
    private params: ParamsGetter

    constructor(params: ParamsGetter) {
        this.command = params.Command
        this.params = params
    }

    public Run = () => {
        switch (this.command) {
            case 'init':
                
                break;
            default:
                break;
        }
    }
}