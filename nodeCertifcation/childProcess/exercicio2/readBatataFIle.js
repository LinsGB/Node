const fs = require('fs')

const value = fs.readFileSync('./batata.txt')
console.log('bata file content', value.toString())