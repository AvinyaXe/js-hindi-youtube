// primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference (Non primitive)

const score = 100
const scoreValue = 100.3

const isLoggedIn = true
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 572938475298765943872n

// Array, Objects, Funtions
const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Vansh",
    age: 20,
}

const myFunction = function(){
    console.log("Hello, World!");
}

// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
console.log(typeof myFunction);


//? ++++++++++++++++++++++++++++++++++++++++

//! Stack (primitive), Heap (Non-primitive)

let myYoutubename = "AvinyaXe"

let anothername = myYoutubename
anothername = "VanshGill"
console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "Vansh@google.com"

console.log(userOne.email);
console.log(userTwo.email);

