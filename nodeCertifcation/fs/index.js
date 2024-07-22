const fs = require('fs')

fs.writeFileSync('./test', 'potato')
const potatoFile = fs.promises.open('./test')
console.log('potatoFile: ', potatoFile)
fs.unlinkSync('./test')