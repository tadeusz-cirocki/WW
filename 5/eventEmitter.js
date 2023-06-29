/*
EventEmitter to klasa w języku JavaScript, która umożliwia implementację wzorca wydawca-subskrybent (publisher-subscriber pattern)
lub wzorca obserwatora (observer pattern). Działa na zasadzie emisji (wywołania) zdarzeń i subskrypcji (rejestracji) na te
zdarzenia. Obiekty, które pełnią rolę emiterów (wydawców), mogą emitować różne zdarzenia, a inne obiekty mogą subskrybować
(obserwować) te zdarzenia i reagować na nie w odpowiedni sposób. EventEmitter dostarcza metody do rejestracji subskrybentów,
wywoływania zdarzeń i obsługi tych zdarzeń przez subskrybentów. Jest powszechnie używany w środowiskach Node.js i innych
aplikacjach, które wymagają asynchronicznej komunikacji między różnymi komponentami.
*/


const EventEmitter = require('events');

// Custom class extending EventEmitter
class MyEmitter extends EventEmitter {
    constructor() {
        super();
        this.count = 0;
    }

    increment() {
        this.count++;
        this.emit('incremented', this.count);
    }
}

// Create an instance of MyEmitter
const myEmitter = new MyEmitter();

// Register a listener for the 'incremented' event
myEmitter.on('incremented', (count) => {
    console.log(`Count incremented: ${count}`);
});

// Perform some operations
myEmitter.increment();
myEmitter.increment();
myEmitter.increment();

/*
node .\5\eventEmitter.js
Count incremented: 1
Count incremented: 2
Count incremented: 3
*/