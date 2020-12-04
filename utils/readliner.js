const readline = require('readline')

/**
 * 
 * onStartCB, onCloseCb :: string -> ()
 */
const start = (onStartInput, onCloseInput) => { 
    let lineNum = 0

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });
    
    rl.on('line', line => {
        lineNum += 1
        onStartInput(line, { lineNum: lineNum })
    })
    rl.on('close', () => {
        onCloseInput({ lineNum: lineNum })
    })
}

module.exports = { 
    start
}
    