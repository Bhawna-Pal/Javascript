// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol,  BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail ;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 3456543576654356754n



// Reference (Non Primitive)

// Array, Object, Functions

const heros = ["shaktiman", "nagraj", "doga"]
let myobj = {
    name: "Bhawna",
    age: 22,
}

const myFunction = function(){
    // console.log("Hello World");   
}

// console.log(typeof bigNumber);





// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "BhawnaPaldotcom"

let anothername = myYoutubeName
anothername = "chaiaurcode"

console.log(myYoutubeName);
console.log(anothername);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "Bhawna@google.com"

console.log(userOne.email);
console.log(userTwo.email);
