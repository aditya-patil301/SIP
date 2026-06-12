console.log(2 + 2);
console.log(2 * 2);
console.log(2 * 2 * 2);
console.log(2 ** 4)

console.log("2" + 2 + 4 +"2");    // First string then whole numbers are treated as string
console.log(2 + 2 + "2");        // First number then whole numbers are treated as number till the string is found

// Comparator

let x = 2;
let y = "2";
console.log(x === y);     // Strictly equal checks data type also
console.log(x == y);      // Noraml equal do not checks data type also

console.log(null === undefined);
console.log(null == undefined);

console.log(null == 0);
console.log(null === 0);
console.log(null >= 0);
console.log(null <= 0);

console.log(undefined == 0);
console.log(undefined === 0);
console.log(undefined >= 0);
console.log(undefined <= 0);

console.log("2" >= 2)