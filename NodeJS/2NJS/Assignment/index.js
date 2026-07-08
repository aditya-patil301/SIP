const { error } = require("console")
const fs = require("fs/promises")
const { json } = require("stream/consumers")

async function fun() {
    try {
        let f1 = await fs.readFile('file1.txt', 'utf-8')
        let f2 = await fs.readFile('file2.txt', 'utf-8')
        f1 = JSON.parse(f1);
        f2 = JSON.parse(f2);
        let readdata = [...f1, ...f2]
        console.log(readdata);

        await fs.writeFile('file3.txt', JSON.stringify(readdata))
    }
    catch(error) {
        console.log(error)
    }
}

fun()




// let data = [1, 2, 3, 4]

// fs.writeFile('file1.txt', JSON.stringify(data))

//     .then(() => {
//         console.log("file create ho gaiye");
//     })

//     .catch((err) => {
//         console.log(err)
//     })


// async function write() {
//     try {

//         const write = await fs.writeFile('file3.txt', JSON.stringify(data))
//         console.log("file creattred")
//     }
//     catch (err) {
//         console.log(err)
//     }
// }