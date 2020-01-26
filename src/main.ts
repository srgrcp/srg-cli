#!/usr/bin/env node
import { ParamsGetter } from './utils/paramsGetter';
import { AngularJson } from './utils/angularJson';
import { CommandHandler } from './utils/commandHandler';

try {
    process.title = 'srg ' + Array.from(process.argv).slice(2).join(' ');
} catch (_) {
    process.title = 'srg';
    
}

const paramsGetter = new ParamsGetter()
paramsGetter.GetParams()

let angularJson: AngularJson
if (paramsGetter.AngularJson) {
    angularJson = new AngularJson(paramsGetter.AngularJson)
} else {
    angularJson = new AngularJson()
}

if (angularJson.Error) {
    console.error(angularJson.Error.message)
    process.exit(0)
}
else
    console.log(angularJson.DefaultProject)

const commandHandler = new CommandHandler(paramsGetter)
commandHandler.Run()
