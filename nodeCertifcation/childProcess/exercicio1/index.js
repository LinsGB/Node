// Exemplo stin e out com spawn

const {exec, spawn} = require('child_process')

const child = spawn('cat btata.txt', {
    shell: true
});
const grep = spawn('grep batata', {
    shell: true
})

child.stdout.pipe(grep.stdin)

child.stdout.on('data', (chunk) => {
    console.log('cat:', chunk.toString())
})

grep.stdout.on('data', (chunk) => {
    console.log('gep:', chunk.toString())
})

