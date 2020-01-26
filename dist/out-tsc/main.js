#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const angularJson_1 = require("./utils/angularJson");
const params_getter_1 = require("./utils/params.getter");
try {
    process.title = 'srg ' + Array.from(process.argv).slice(2).join(' ');
}
catch (_) {
    process.title = 'srg';
}
if (angularJson_1.error)
    console.error(angularJson_1.error.message);
else
    console.log(angularJson_1.defaultProject);
const paramsGetter = new params_getter_1.ParamsGetter();
paramsGetter.GetParams();
//# sourceMappingURL=main.js.map