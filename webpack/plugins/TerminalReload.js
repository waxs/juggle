/** ----------------------------------------
    Modules
---------------------------------------- */

const exec = require('child_process').exec;

/** ---------------------------------------- 
    Terminal Reload
---------------------------------------- */

class TerminalReload {
    constructor(name, command, hook = 'afterEmit') {
        this.name = name;
        this.command = command;
        this.hook = hook;
    }
    
    static execute(_, stdout, stderror) {
        console.clear();

        if(stdout) process.stdout.write(stdout);
        if(stderror) process.stderr.write(stderror);
    }
    
    apply(compiler) {
        compiler.hooks[this.hook].tap(this.name, () => {
            exec(this.command, TerminalReload.execute);
        });
    }
}

/** ----------------------------------------
    Exports
---------------------------------------- */

module.exports = TerminalReload;