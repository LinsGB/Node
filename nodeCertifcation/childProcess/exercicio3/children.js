process.on('message', (msg) => {
    console.log('Pai:', msg);
    if(msg === 'va dormir') {
        process.exit()
    }
});
  
  let counter = 0;
  
  setInterval(() => {
    process.send('to com sono');
  }, 1000);

process.send('oi pai');