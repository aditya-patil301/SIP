const { error } = require('console');
const fs = require('fs');

//Synchronus Way
fs.writeFileSync('file.txt', 'Hello!!');

//Asynchronus Way
fs.writeFile('file.txt', "It's you choice", (err) => {
    if (err) {
        console.log(err)
        return;
    }
    console.log("File created")
})

let data = {
    batch: 24,
    course: "B.C.A",
    date: Date.now()
}

fs.writeFile('file.txt', JSON.stringify(data), (err) => {
    if (err) {
        console.log(err)
        return;
    }
    console.log("File Created")
})