
//generate :: [[a], [b], ... , [x]] -> [[a, b, ... , x]]
const generate = (data) => {
    if (data.length === 0) {
        return [[]]
    }
    const prevs = generate(data.slice(1))
    //return data[0].length === 0
    // ? prevs
    // : 
    return data[0].reduce(
        (acc, item) => [].concat(
            acc,
            prevs.map(arr => [item, ...arr])
        )
        ,
        []
    )
}


const test = (fn, arg) => console.log(arg, fn(arg))

test(generate, [])
test(generate, [['a']])
test(generate, [[1, 2]])
test(generate, [['a'], ['b']])

test(generate, [['a', 'b'], [1]])
test(generate, [['a', 'b'], [1, 2, 3]])

test(generate, [[], ['a', 'b']])
test(generate, [[10, 20], [], ['a', 'b']])


const data = [
    ['Karel', 'Hynek', 'Jarmila'],
    ['Novák', "Adamíra", "Nývltová"],
    [1000, 500],
] 

console.log("---------------------------------")
console.log(generate(data))