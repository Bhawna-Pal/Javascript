//  Singleton
//  objects.create

//  Objects Literals

const mySym = Symbol("Key1")


const JsUser = {
    name: "Bhawna",
    "full name": "Bhawna Pal",
    [mySym]: "Key1",
    age: 18,
    location: "Meerut",
    email: "bhawna@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "bhawnapal@google.com"
// Object.freeze(JsUser)
JsUser.email = "bhawnapal@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());