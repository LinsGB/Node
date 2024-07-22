//Crie um arquivo de 54MB escrito 'batata' várias vezes
//Leia esse arquivo utilizando streams e crie outro arquivo substituido a palavra 'batata' por 'batata inglesa'

const fs = require('fs')
const {Buffer} = require('node:buffer')
const { pipeline } = require('node:stream/promises')

const writeBatata =() => {
    const bufferBatata = Buffer.alloc(1024*1024*54, 'batata')

    fs.writeFileSync('./batata.txt', bufferBatata)
}

const writeBatataIngles = async () => {
    await pipeline(
        fs.createReadStream('./batata.txt'),
        async function* (source) {
            source.setEncoding('utf8');
            let futurePotato = ''   
            for await (const data of source) {
                yield data.replaceAll(/batata/g, 'batata inglesa ')
            }
        },
        fs.createWriteStream('./batata_inglesa.txt')
        )
}

const writeBatataInglesa = () => {
    const read = fs.createReadStream('./batata.txt')
    const write = fs.createWriteStream('./batata_inglesa2.txt')
    read.on('data', (chunk) => {
        console.log('CHUNK', chunk.toString())
        write.write(chunk+' inglesa')
    })
}

writeBatataIngles()


