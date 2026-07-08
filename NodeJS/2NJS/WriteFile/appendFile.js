const { error } = require('console');
const fs = require('fs');
fs.appendFileSync('file.txt', '\nNew Line added');
fs.appendFile('file.txt', '\nAnother Line', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Data appended successfully");
    }
});