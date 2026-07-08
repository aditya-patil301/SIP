const { error } = require('console');
const fs = require('fs');
const exists = fs.existsSync("file.txt")
console.log(exists);