const {fork} = require('child_process')

const childProcess = fork('./children.js')

childProcess.on('message', (data) => {
    console.log('filho: ', data)
    if(data === 'oi pai'){
        childProcess.send('oi filho')
    } else {
        childProcess.send('va dormir')
        childProcess.removeAllListeners()
        process.exit()
    }
})

