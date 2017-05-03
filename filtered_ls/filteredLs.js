let fs=require('fs');
//first two values of process.argv are reserved for system info by Node.
let directory = process.argv[2];
let fileExtension = "." + process.argv[3];

fs.readdir(directory, (err, list) => {
    if (err){
        console.log(err);
    }
    else{
        list.forEach(function(file){
            if (file.endsWith(fileExtension)){
                console.log(file);
            }});
    }
});