let arr = [1, 2, 3, 4, 5];
console.log(arr);
arr.forEach(i => {
    console.log(i)
});

// Push
arr.push(6);
console.log("After push: " + arr);

// Pop
arr.pop();
console.log("After pop: " + arr);

// Shift and Unshift
arr.unshift(0);             // Add 0 in front of an array
console.log("After unshift: " + arr);
arr.shift();                // Remove element from first index
console.log("After shift: " + arr);

// Index of any element
console.log(arr.indexOf(2));
console.log(arr.indexOf(10));   // Return -1 if element doesn't exist

console.log(arr[2]);


// Merging two arrays

let arr_1 = [1, 2, 3, 4];
let arr_2 = [5, 6, 7, 8];
arr_1.push(arr_2);
console.log(arr_1);

let arr_3 = [...arr_1, ...arr_2];
console.log(arr_3);

let q = 1;
let w = 2;
let e = 3;
let r = 4;
console.log(q, w, e, r);