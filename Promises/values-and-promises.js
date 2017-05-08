function attachTitle (name){
    return 'DR. ' + name;
}

let promise = new Promise((fulfill, reject) => fulfill('MANHATTAN'))
                            .then(attachTitle).then(console.log);
