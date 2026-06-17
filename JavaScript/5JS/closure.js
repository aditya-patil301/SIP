// Closure - only let and var should be used

function outer(){
    var n = 1;
    function inner(){
        n++;
        console.log(n);
    }
    inner();
}

outer();  // 2
outer();  // 2
outer();  // 2

console.log();

// Return statement diffrence in colsure
function returnOuter(){
    var x = 1;
    function inner(){
        x++;
        console.log(x);
    }
    return inner;
}

const ans = returnOuter();
ans();  // 2
ans();  // 3
ans();  // 4

console.log();

function grandFather(){
    var x = 1;
    return function parent(){
        x++;
        return function child(){
            x++;
            console.log(x);
        }
    }
}

const ans_1 = grandFather();
const ans_2 = ans_1();
ans_2();
ans_2();
ans_2();
ans_2();

console.log();

// Date Object
const todayDate = new Date();
console.log(todayDate);
console.log(todayDate.getFullYear());
console.log(todayDate.getMonth());
console.log(todayDate.getDate());
console.log(todayDate.getDay());
console.log(todayDate.toDateString());
console.log(todayDate.toLocaleTimeString());
console.log(todayDate.toLocaleDateString());




const bday = new Date("2005-07-30");
console.log(bday);
