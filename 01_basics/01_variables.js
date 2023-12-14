const accNumber = 123456
let accName = "Shreesh"
var accBalance = 23458
accPolicy = "Regular"

// accNumber = 23123 // This will not work as accNuber is a constant

accName = "Viraj"
accBalance = 100000
accPolicy = "Non Regular"
let accState;

/* var is genarally not used beacause of issue in block scope and functional scope */

console.table([accNumber,accName,accBalance,accPolicy,accState]);