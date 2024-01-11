let arr = [1,2,3,4,5,6,7]

let myObject = {
    "IN" : "India",
    "UK" : "United Kingdom",
    "ESP" : "Spain"
}
for (const i of arr) {
    // console.log(i);
}

let myMap = new Map();
myMap.set("IN","India")
myMap.set("UK","United Kingdom")
myMap.set("ESP","Spain")

for (const [key,value] of myMap) {
    console.log(`The abbrevation ${key} refers to ${value}`)
}