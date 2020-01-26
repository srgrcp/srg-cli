"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("colors");
class ParamsGetter {
    constructor() {
        this._angularJson = './angular.json';
        this.getParam = (paramList) => {
            const firstArg = paramList[0];
            if (firstArg.startsWith('-')) {
                switch (firstArg) {
                    case '-a':
                    case '--angular-json':
                        const angularJson = paramList[1];
                        if (!angularJson.startsWith('-')) {
                            this._angularJson = angularJson;
                            paramList.splice(0, 2);
                        }
                        break;
                    default:
                        paramList.shift();
                        break;
                }
            }
            else if (this._command === undefined) {
                this._command = firstArg;
                paramList.shift();
            }
            else {
                console.error('Error:'.red, 'There are more than one command.');
                process.exit(0);
            }
        };
        this.GetParams = () => {
            const paramsList = [...this.args];
            console.log(paramsList);
            while (paramsList.length) {
                this.getParam(paramsList);
            }
            console.log(this._command, this._angularJson);
        };
        [this.nodeBin, this.mainPath, ...this.args] = process.argv;
    }
    get Command() { return this._command; }
    get AngularJson() { return this._angularJson; }
}
exports.ParamsGetter = ParamsGetter;
//# sourceMappingURL=params.getter.js.map