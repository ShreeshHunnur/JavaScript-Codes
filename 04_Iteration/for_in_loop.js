let arr = ["Google","Microsoft","Apple","Meta"]

for (const index in arr) {
    // console.log(arr[index]);
}

let myObject = {
    "IN" : "India",
    "UK" : "United Kingdom",
    "ESP" : "Spain"
}

for (const index in myObject) {
    console.log(`The abbrevation ${index} means ${myObject[index]}`);
}

let FullName = "Shreesh Hunnur"

for (const key in FullName) {
    console.log(FullName[key]);
}