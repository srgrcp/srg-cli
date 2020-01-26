"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
let jsonFile;
let fileError;
try {
    jsonFile = fs.readFileSync('./angular.json');
}
catch (_error) {
    jsonFile = undefined;
    fileError = _error;
}
exports.angular = jsonFile ? JSON.parse(jsonFile) : undefined;
exports.projects = exports.angular ? exports.angular.projects : undefined;
exports.defaultProject = exports.angular ? exports.angular.defaultProject : undefined;
exports.error = fileError;
//# sourceMappingURL=angularJson.js.map