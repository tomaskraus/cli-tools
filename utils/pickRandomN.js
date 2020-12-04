

// pickRandomN :: [a] -> [a]
const pickRandomN = (numOfItems, arr) => {
    if (numOfItems < 1) {
        return []
    }
    if (numOfItems >= arr.length) {
        return arr
    }
    return _pickRandomN_A(numOfItems, arr, [])
}


const _pickRandomN_A = (numOfItems, arr, acc) => {
    if (numOfItems == 0) {
        return acc
    }
    const itemIndex = Math.trunc(arr.length * Math.random())
    return _pickRandomN_A(
        numOfItems - 1,
        [].concat(arr.slice(0, itemIndex), arr.slice(itemIndex + 1)),
        [...acc, arr[itemIndex]]
    )
}



// const cl = console.log

// cl(pickRandomN(3, [1, 2, 3, 4, 5]))
// cl(pickRandomN(1, [1, 2, 3, 4, 5]))
// cl(pickRandomN(5, [1, 2, 3, 4, 5]))
// cl(pickRandomN(3, [1, 2]))
// cl(pickRandomN(4, [1, 2]))
// cl(pickRandomN(1, [2]))
// cl(pickRandomN(1, []))
// cl(pickRandomN(0, []))
// cl(pickRandomN(0, [1, 2, 3]))
// cl(pickRandomN(-1, [1, 2]))


module.exports = {
    pickRandomN,
}