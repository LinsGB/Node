// Exemplo stin e out com spawn

const {exec, spawn} = require('child_process')

exec('cat batata.txt', (err,stdout) => { console.log('stdout =>', stdout)})

const child = spawn('cat batata.txt', {
    shell: true
});
const grep = spawn('grep batata', {
    shell: true,
})

child.stdout.pipe(grep.stdin)

child.stdout.on('data', (chunk) => {
    console.log('cat:', chunk.toString())
})

grep.stdout.on('data', (chunk) => {
    console.log('gep:', chunk.toString())
})


