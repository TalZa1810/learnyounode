 let promise = Promise.reject(new Error('A fatal exception'));
promise.catch((err) =>  process.stderr.write(err.message));