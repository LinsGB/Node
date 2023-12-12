import express from 'express'
import cors from 'cors'
import {setTimeout} from "timers/promises";
import { Readable } from 'stream';

const app = express(cors())


const hostname = '127.0.0.1';
const port = 3001;

function* generator() {
    for(const data of [{test: 'texto1'}, {test: 'texto1'}, {test: 'texto1'}]) {
        
        yield JSON.stringify(data)
    }
    yield null
}

app.get('/', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    const readableStream = new Readable()
    readableStream._read = () => {}
    const generatorData = generator()

    const readableWebStream = Readable.toWeb(readableStream)

    const writableWebStream = new WritableStream({
        async write(chunk) {
            console.log('chunk =>', chunk)
            res.write(chunk)
            await setTimeout(1000)
        },
        close() {
            res.end()
        }
    })

    readableWebStream.pipeTo(writableWebStream)

    readableStream.push(JSON.stringify({test: 'texto2'}))
    readableStream.pause()
    readableStream.push(JSON.stringify({test: 'texto1'}))
    readableStream.push(JSON.stringify({test: 'texto3'}))
    readableStream.push(null)
    
})


app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

