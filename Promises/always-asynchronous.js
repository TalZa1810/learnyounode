let promise = new Promise((fulfill, reject)=> {
    fulfill('PROMISE VALUE');
}).then(console.log);

//this output is printed before the promise fulfillment
console.log('MAIN PROGRAM');

