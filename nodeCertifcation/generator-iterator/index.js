const assert = require('assert')

/*
Iterator é um objeto que possibilita o retorno de dados sob demanda até que os dados acabem, utem que
possuir o metodo next e retornar um {value: ..., done: boolean}

Generator é uma factory de Iterator, facilita o uso com uma notação *
**/

//---ITERATOR---
function exampleIterator () {
    let iteratorCount = 0
    const end = 3

    const interator = {
        next() {
            iteratorCount++
            if(iteratorCount < end) {
                return {value: iteratorCount, done: false}
            }
            return {value: iteratorCount, done: true}
        }
    }
    
    return interator
}

const iter = exampleIterator()


assert.deepStrictEqual(iter.next(), {value: 1, done: false})
assert.deepStrictEqual(iter.next(), {value: 2, done: false})
assert.deepStrictEqual(iter.next(), {value: 3, done: true})

//---GENERATOR---

function* exampleGenerator() {
    yield 1
    yield 2
    yield 3
}

const gen = exampleGenerator()

assert.deepStrictEqual(gen.next(), {value: 1, done: false})
assert.deepStrictEqual(gen.next(), {value: 2, done: false})
assert.deepStrictEqual(gen.next(), {value: 3, done: false})
assert.deepStrictEqual(gen.next(), {value: undefined, done: true})


for(value of exampleGenerator()) {
    console.log('LOOP EXAMPLE:',value)
}
