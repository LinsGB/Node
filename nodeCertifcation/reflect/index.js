//https://www.keithcirkel.co.uk/metaprogramming-in-es6-part-2-reflect/?_gl=1*1x71vi0*_ga*NTkwNjc1NTUuMTcyMTM1NDM5Mw..*_ga_37GXT4VGQK*MTcyMTYwNjE4MC44LjEuMTcyMTYwNjQ2MS4wLjAuMA..

const assert = require('assert')

const object = {
    add() {
        return 'test'
    }
}
object.add.apply = function () {throw new Error('test')}

assert.deepStrictEqual(Reflect.apply(object.add,{}, [] ), 'test')