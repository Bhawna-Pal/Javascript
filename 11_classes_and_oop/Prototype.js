// let myName = "Bhawna     "
// let myChannel = "chai     "

// console.log(myChannel.trueLength);


let myHero = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`); 
    }
}

Object.prototype.bhawna = function(){
    console.log(`bhawna is present in all objects`);  
}

Array.prototype.heyBhawna = function(){
    console.log(`Bhawna says hello`); 
}

// heroPower.bhawna()
// myHero.bhawna()
// myHero.heyBhawna()
// heroPower.heyBhawna()

//  inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVedio: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//  mordern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"bhawna".trueLength()
"iceTea".trueLength()