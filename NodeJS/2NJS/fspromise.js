const { error } = require("console")
const fs = require("fs/promises")

const data = fs.readFile('File_1.txt', 'utf-8')
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })


async function readFiles() {
    try {
        const data = await fs.readFile('File_1.txt');
        console.log(data);
    }
    catch (err){
        console.log(err);
    }
}
readFiles();


let data_2 = "Hello, this text is written using promise method";

fs.writeFile('File_2.txt', JSON.stringify(data_2))
    .then(() => {
        console.log("File Created");
    })
    .catch((err) => {
        console.log(err);
    })


let data_3 = "Hello, this text is written using async method";
async function write() {
    try {
        const write = await fs.writeFile('File_3.txt', JSON.stringify(data_3));
        console.log("File Created");
    }
    catch (err) {
        console.log(err);
    }
}
write();