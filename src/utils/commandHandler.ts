import { IParams } from 'src/interfaces/iParams';
import { ICommand } from 'src/interfaces/iCommand';
import { InitCommand } from 'src/commands/init/initCommand';
import { AngularJson } from './angularJson';

export class CommandHandler {
    private commandString: string
    private params: IParams
    private command: ICommand | undefined
    private angularJson: AngularJson

    constructor(params: IParams) {
        this.commandString = params.Command
        this.params = params

        // Getting angular.json
        if (params.AngularJsonPath) {
            this.angularJson = new AngularJson(params.AngularJsonPath)
        } else {
            this.angularJson = new AngularJson()
        }

        if (this.angularJson.Error) {
            console.error(this.angularJson.Error.message)
            process.exit(0)
        }
    }

    public Run = () => {
        switch (this.commandString) {
            case 'init':
                this.command = new InitCommand(this.params, this.angularJson)
                break;
            default:
                process.exit(0)
        }
        this.command.Run()
    }
}
