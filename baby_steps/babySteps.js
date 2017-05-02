console.log(process.argv.reduce((prev, curr, currIndex) => (currIndex < 2) ? 0 : prev + (curr | 0)));
