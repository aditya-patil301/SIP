let student = {
    name: "Aditya",
    age: 22,
    course: "BCA",
    enrollmentNo: "24COA2BCA0033",
    sem: 5,
    cgpa: 8.97,
    skills: "HTML, CSS, JS, Java, Python, MySQL",
    greet: function() {
        console.log(`Hello from ${this.name}`);
    }
};

// Print Object and Get Values
console.log(student);
console.log(student.name);
console.log(student["course"]);

// Update Object
student.skills = "HTML, CSS, JS, Java, Python, MySQL, Competitive Programming";
console.log(student.skills);  

// Add keys in object
student.city = "Sanawad";
student.intro = function() {
        console.log(`Hello, I am ${this.name} and I am persuing ${this.course} at SAGE University Indore.`);
    }

console.log(student);
console.log(student.greet());
console.log(student.intro());




let myObject = {
    name: "Aditya"
}

console.log(myObject.name);

myObject.age = 21;
myObject.course = "BCA";
myObject.greet = function(){
    console.log(`Hello, I am ${this.name} and I am ${this.age} years old.`);
}

console.log(myObject);
myObject.greet();