#!/usr/bin/env node
import { ParamsGetter } from './utils/paramsGetter';
import { CommandHandler } from './utils/commandHandler';

try {
    process.title = 'srg ' + Array.from(process.argv).slice(2).join(' ');
} catch (_) {
    process.title = 'srg';
    
}

const paramsGetter = new ParamsGetter()
paramsGetter.GetParams()

const commandHandler = new CommandHandler(paramsGetter)
commandHandler.Run()
