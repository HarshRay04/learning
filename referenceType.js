//object creation in javascript
let course = {
    title: "laura lahsan",
    description: "projects",
    rating: 10
};
console.log(course);
console.log(typeof (course)); //object
console.log(course.title); //one method to target any element of the object.

console.log(course['description']); //another method to target any element int the object.

// This is value type.Where the x is copying the data by value

let y = "Harsh";
let x = y;
y = "gaurav";
console.log(y); //gaurav
console.log(x); //Harsh

//call by reference is done by object array and functions.
//for example :

let p = {
    name: "Harsh"
};

let q = p; // here the value is copied by reference.
p.name = "Gaurav";

console.log(p); //gaurav

console.log(q); //gaurav

//array and functions both are objects only.

let dost = ['Harsh', 'Tejanshu', 'Gaurav', true, 0, null];
//note : arrays are objects and we can store multiple types of data in it.
console.log(dost[0]);
console.log(dost[1]);
console.log(dost[2]);
console.log(dost[3]);
console.log(dost[4]);
console.log(dost[5]);
console.log(typeof (dost[0]));
console.log(typeof (dost[3]));
console.log(typeof (dost[4]));
console.log(typeof (dost[5]));
console.log(typeof (dost));
//to print whole array at a single time.
console.log(dost);