import { IParams } from 'src/interfaces/iParams';
import { ICommand } from 'src/interfaces/iCommand';
import { InitCommand } from 'src/commands/init/initCommand';
import { AngularJson } from './angularJson';
import { CreateRepoCommand } from 'src/commands/create-repo/createRepoCommand';
import { CreateMicroAppCommand } from 'src/commands/create-micro-app/createMicroAppCommand';

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
            case 'create-repo':
                this.command = new CreateRepoCommand(this.params, this.angularJson)
                break;
            case 'create-micro-app':
                this.command = new CreateMicroAppCommand(this.params, this.angularJson)
            default:
                process.exit(0)
        }
        this.command.Run()
    }
}
