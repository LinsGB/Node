const {Buffer} = require('buffer')
const EventEmitter = require('events')

const bufferTest = Buffer.from([1,2,3,4,5,6,7,8,9], 'utf8')


const arrayTest = new Int8Array(bufferTest)
console.log(arrayTest)

const slicedArray = arrayTest.slice(3)
slicedArray[0]=66
console.log('slicedArray =>', slicedArray)
console.log('original Array =>',arrayTest)

const subArray = arrayTest.subarray(3)
subArray[0]=66
console.log('subArray =>', subArray)
console.log('original Array =>',arrayTest)

console.log(bufferTest.toString('base64'))
