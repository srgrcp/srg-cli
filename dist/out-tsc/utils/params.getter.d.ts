import { IParams } from '../interfaces/iParams';
import 'colors';
export declare class ParamsGetter implements IParams {
    private _command;
    private _angularJson;
    private nodeBin;
    private mainPath;
    private args;
    constructor();
    get Command(): string;
    get AngularJson(): string;
    private getParam;
    GetParams: () => void;
}
