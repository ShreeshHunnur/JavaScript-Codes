// Dates

// let myDate = new Date();
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

//How to create a apecific date

let myCreatedDate = new Date(2023,3,21,5,3,45);  // The format is year , month , day. The month January starts from 0, feb is 1 and so on... 
// console.log(myCreatedDate.toLocaleString());

// another way
let myDate1 = new Date("2005-04-21");
// console.log(myDate1.toLocaleString());

let myDate2 = new Date("04-21-2005");
// console.log(myDate2.toLocaleString());


//Time Stamps

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// console.log(myDate1.getTime());

//converting time to seconds

//console.log(Math.floor(Date.now()/1000));

//some more date methods
let newDate = new Date();
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getTime());

// plaYING WITH LOCALE sTRING

console.log(newDate.toLocaleString('default',{
    hour : "2-digit",
    weekday : "long",
    minute : "numeric"
}))