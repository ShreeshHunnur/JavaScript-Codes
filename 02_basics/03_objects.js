//singleton
//Object.create

//Object literals

const mySym = Symbol("mykey1")
const JsUser = {
    name : "Shreesh",
    "full name" : "Shreesh Hunnur",//we cannot access using dot operator so we use []
    [mySym] : "mykey1", //This is used to declare a symbol as a key
    age : 18,
    email : "shreesh1060@gmail.com",
    isLoggedIn : false,
    location : "Chennai",
    lastLoggedInDays : ["Monday","Tuesday","Wednesday"]
}

// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser["age"]);
// console.log(JsUser["lastLoggedInDays"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// HOW TO OVERWRITE THE VLAUES

JsUser.email = "shreesh@google.com"
// console.log(JsUser.email);

// Inorder to make the JsUser object immutable i.e not able to change the values we will freeze the object

// Object.freeze(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
console.log(JsUser.greeting());

JsUser.greetingztwo = function(){
    console.log(`Hello JS User ${this["name"]}`)
}

console.log(JsUser.greetingztwo());