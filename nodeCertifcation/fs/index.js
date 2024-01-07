const fs = require('fs')
const {open} = require('fs/promises')


fs.writeFileSync('./test', 'potato')
const potatoFile = open('./test')
console.log('potatoFile: ', potatoFile)
fs.unlinkSync('./test')