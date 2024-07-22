/*
Symbol pode ser usado para criar propriedades privadas, o que é interessante para pacotes
e também possui symbols como o de iterator
Da para criar como se fosse uma super Classe onde você define o comportamento quando for chamado funções
de classes pai(Prototype chain)
**/

const assert = require('assert')
const { setTimeout } = require('timers/promises')

const exampleSymbol = Symbol('batata')

const test = {
}

test[exampleSymbol] = 'batataPrivada'
test['batata'] = 'batata'

assert.deepStrictEqual(test[Symbol('batata')], undefined)
assert.deepStrictEqual(test[exampleSymbol], 'batataPrivada')
assert.deepStrictEqual(test['batata'], 'batata')

//---Symbol iterator---

const symbolIterator = {
    [Symbol.iterator]: () => ({
        items: ['1', '2', '3'],
        next() {
            return {
                done: this.items.length === 0,
                value: this.items.pop()
            }
        }
    })
}

for (const value of symbolIterator) {
    console.log('value', value)
}

//---Symbol for data fromate---
const kItems = Symbol('kItems')
class MyDate {
    constructor(...args) {
        this[kItems] = args.map(arg => new Date(...arg))
    }

    [Symbol.toPrimitive](coercionType) {
        if(coercionType !== 'string') throw new TypeError()
    }

    *[Symbol.iterator]() {
        yield 4
        yield 5
        yield 6
    }

    async *[Symbol.asyncIterator]() {
        await setTimeout(100)
        yield 7
        yield 8
        yield 9
    }

    get [Symbol.toStringTag]() {
        return 'WHAT?'
    }
}

const myDate = new MyDate(['2020', '03', '01'], ['2022', '03', '01'])

const expectedDates = [
    new Date('2020', '03', '01'),
    new Date('2022', '03', '01')
]

assert.deepStrictEqual(Object.prototype.toString.call(myDate), '[object WHAT?]')
assert.throws(() => myDate + 1)

for (const iteValue of myDate) {
    console.log(iteValue)
}

;(async () =>
    {
        for await(const iteValue of myDate) {
            console.log(iteValue)
        }
    }
)()

