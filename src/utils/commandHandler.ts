import { IParams } from 'src/interfaces/iParams';
import { ICommand } from 'src/interfaces/iCommand';
import { InitCommand } from 'src/commands/init/initCommand';

export class CommandHandler {
    private commandString: string
    private params: IParams
    private command: ICommand

    constructor(params: IParams) {
        this.commandString = params.Command
        this.params = params
    }

    public Run = () => {
        switch (this.commandString) {
            case 'init':
                this.command = new InitCommand(this.params)
                break;
            default:
                process.exit(0)
        }
        this.command.Run()
    }
}
