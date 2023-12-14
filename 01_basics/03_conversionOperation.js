let score = "hitesh"

//console.log(typeof score);
//console.log(typeof(score));

let convertInNumber = Number(score)

//console.log(convertInNumber);// This will return NaN => Not a Number
//console.log(typeof convertInNumber);


// "33" => 33
// "33abc" => NaN
// true/false => 1/0
// null => 0
// undefined => NaN

let isDefined = ""
isDefined = Boolean(isDefined)
console.log(isDefined);