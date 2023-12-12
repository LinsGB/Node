const {exec} = require('child_process')

exec('node createBatataFile.js')
exec('node readBatataFIle.js',(error, stdout) => {
    console.log('stdout', stdout)
})

