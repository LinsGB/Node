import EventEmitter from 'events'


/* his code show how to create listeners and emit */
function listenerTest () {
    
    const myEmitter = new EventEmitter();

    /* newListener -> is trigered when other listerners is created */
    myEmitter.once('newListener', (event, listener) => {
        
        if (event === 'event') {
            // Insert a new listener in front
            myEmitter.on('event', () => {
                console.log('B');
            });
        }
    });
    
    myEmitter.on('event', (value1, value2) => {
        console.log('A', value1, value2);
    });
    
    myEmitter.on('notEvent', () => {
        console.log('C');
    });
    
    myEmitter.emit('event', 'value', 'value2');
    myEmitter.emit('notEvent');
}

/* This code show how the max listeners manipulation works */
function maxListeners() {

    const myEmitter = new EventEmitter();

    console.log('Maximum Listeners:', myEmitter.getMaxListeners())

    myEmitter.setMaxListeners(1);

    myEmitter.on('event', () => {
        console.log('EVENT 1')
    });

    myEmitter.emit('event')

    myEmitter.once('event', () => {
        console.log('EVENT 2')
    });
}

listenerTest()
