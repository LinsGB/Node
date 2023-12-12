const fs = require('fs')
const {open} = require('fs/promises')


fs.writeFileSync('./test', 'potato')
const potatoFile = await open('./test')
console.log('potatoFile: ', potatoFile)
fs.unlinkSync('./test')