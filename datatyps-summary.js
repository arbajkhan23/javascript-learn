// Primitive

// 7 types : String, Boolean , Number, null, BigInt , Symbol,  undefined,

const score = 100
 const scoreValue = 100.3
 
 
 const isLoggedIn = false
 const outsideTemp = null;
 let userEmail;
 console.log(typeof outsideTemp);
 const id = Symbol ('123')
 const anotherId = Symbol('123');
 console.log(id === anotherId);
 console.log(typeof anotherId);
 const bigNumber = 2482764847778457548746847n;
console.log(typeof bigNumber);


 // Referenc (Noe Primitive)
// Array
// Object
// Function


// const heros = ["shaktiman", "nagggraj", "doag"];   

// let 
//    myObj {
//     name : "arbaj khan" ;
//     age : 21;
//    }


const myFunction = function() {
    console.log("Hello world");
}

console.log(typeof myFunction);


// ++++++++++++++++++++++
// Memory
// Stack (Primitive) use hoti hai 
// Heap (Noe Primitive) use hoti hai 

let myInstaname = "arbja khan";
let anotherName = myInstaname;
anotherName = "javascript learning"
console.log(myInstaname);
console.log(anotherName);


let userOne = {
    email: "arbajkhan8034@gmail.com",
    upi: "arbaj@bl",
}

let userTow = userOne
userTow.email = "arbajkhan8034@gmail.com"

console.log(userOne.email)
console.log(userTow.email)

