// Singleton
// Object.create


// Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Vansh",
    age: 20,
    [mySym]: "mykey1",
    location: "kurkshetra",
    "full name": "Vansh Gill",
    email: "vgill9883@gamil.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(typeof JsUser[mySym])

JsUser.email = "vansh@openai.com"

// console.log(JsUser.email)
// Object.freeze(JsUser)

JsUser.email = "vansh@google.com"

// console.log(JsUser.email)
// console.log(JsUser)

JsUser.greeting = function(){
    console.log(`Hello, ${JsUser.name}`);
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
