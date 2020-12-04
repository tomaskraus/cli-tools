const assert = require('assert')

const readliner = require('./utils/readliner')
const { pickRandomN } = require('./utils/pickRandomN')

const buncher = (groupSize, groupEater) => {
    gSize = parseInt(groupSize, 10)
    assert(isNaN(gSize) === false)
    let lineBuffer = []

    const consume = line => {
        lineBuffer = [].concat(lineBuffer, line)
        if (lineBuffer.length === gSize) {
            groupEater(lineBuffer)
            lineBuffer = []
        }
    }

    const flush = ctx => {
        groupEater(lineBuffer)
    }

    return {
        consume,
        flush,
    }
}


const picker = (count) => strArr => {
    // pickRandomN(count, strArr)
    // strArr
    // .forEach(element => {
    //     console.log(element)
    // });
    console.log(strArr)
    console.log('')
}



const main = (count, groupSize) => {
    const b = buncher(groupSize, picker(count))

    readliner.start(
        b.consume,
        b.flush
    )
}


//--------------------------------------------------------------------------

if (process.argv.length < 4) {
    console.log(`Usage: ${process.argv[1]} <count> <groupSize>`)
} else {
    const count = process.argv[2]
    const groupSize = process.argv[3]
    main(count, groupSize)
}


