// functions can be created by using function.
printName("Tejanshu");
printName("Gaurav");


function printName(name) {
    console.log("MY NAME IS " + name);
}
printName("Harsh");
printName("Tejanshu");
printName("Gaurav");



//how js code is excuted.
/*
-> the envirnment is called execution context.
-> when intially the programme runs the execution context is global.
-> which is termed as GEC = global execution context.
    execution context and pushed into call stack.
-> the execution context has two main components:
 :-> the first phase where there is memory allocation to the variable and all
    it is also called variable enivronment;
 :-> the second phase is basically the code phase where the code is executed K
    one by one or we can say line by line as js is
    synchronus single threaded language,that is that all the code
    is executed in the same thread and one by one;
*/


/* 
-> let and const are block scoped.
-> var is function scope.
*/

// functions are called first class citizens.

function add(a, b) {
    return a + b;
}
console.log(add);
console.log(2, 3);


// in js we can also asign function to variable.

let sum = function (a, b) {
    return a + b;
}

console.log(sum);
console.log(sum(2, 3));

// arrow functions:

let sum1 = (a, b) => a + b;

console.log(sum1(3, 4));