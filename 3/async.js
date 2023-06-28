// Simulating asynchronous requests
function fetchDataFromSourceOne() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data from source one');
        }, 2000);
    });
}

function fetchDataFromSourceTwo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data from source two');
        }, 3000);
    });
}

async function fetchDataFromSources() {
    try {
        // Start the first asynchronous request. It takes 2 seconds to respond
        const dataFromSourceOne = fetchDataFromSourceOne();
        console.log('Request sent to data source 1');

        // Start the second asynchronous request. It takes 3 seconds to respond
        const dataFromSourceTwo = fetchDataFromSourceTwo();
        console.log('Request sent to data source 2');

        // We can perform some operations here
        console.log("Waiting...");

        // Here we have to wait to return data. 
        // Whole operation takes 3 seconds (max of set of respond times from sources - max(2,3) here)
        return [await dataFromSourceOne, await dataFromSourceTwo];
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

// Invocation and handling of the fetchDataFromSources() function
fetchDataFromSources()
    .then((result) => {
        console.log('Data received:', result);
        // Further data processing
    })
    .catch((error) => {
        console.error('Error:', error);
        // Error handling
    });

/*
node .\3\async.js
Request sent to data source 1
Request sent to data source 2
Waiting...
Data received: [ 'Data from source one', 'Data from source two' ]

Whole operation takes 3 seconds (max of set of respond times from sources - max(2,3) here)
*/