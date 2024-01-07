const {PerformanceObserver, performance} = require('node:perf_hooks');
const { setTimeout } = require('node:timers/promises');

const observerFunction  = async () => {
    const obs = new PerformanceObserver((items) => {
        console.log(items.getEntries()[0].duration);
        performance.clearMarks();
      });
      obs.observe({ type: 'measure' });
      performance.measure('Start to Now');
      
      performance.mark('A');
    
    

    performance.measure('A to Now', 'A');

}

observerFunction()