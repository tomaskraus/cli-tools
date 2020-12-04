const readliner = require('./utils/readliner')

const printNotNull = s => {
    if(s !== null) {
        console.log(s)
    }
}


const main = (decorator) => {    
    printNotNull(decorator.onStart({}))

    readliner.start(
        (line, context) => printNotNull(decorator.onLine(line, context)),
        context => printNotNull(decorator.onClose(context)),
    )
}


//--------------------------------------------------------------------------

if (process.argv.length < 3) {
    console.log(`Usage: ${process.argv[1]} <decoratorFile>   
    decoratorFile: without .js extension`)
} else { 
    const decoratorFileNameWithoutExtension = process.argv[2]
    const decorator = require(`./${decoratorFileNameWithoutExtension}`)
    main(decorator)
}


