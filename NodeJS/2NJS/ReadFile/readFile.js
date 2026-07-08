const { error } = require('console');
const fs = require('fs');

console.log("__dirname =", __dirname);
console.log("__filename =", __filename);


// Synchronus
const data = fs.readFileSync(`file.txt`,`utf-8`);
console.log(data);


//Asynchronus
console.log("Starting")
fs.readFile('file.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log(error)
    } else {
        console.log(data)
    }
});
