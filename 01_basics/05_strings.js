let name = "Shreesh"
let repoCount = 10

// console.log(name + repoCount + " Value");  // This is outdated and generally not used

// Instead we use the below syntax which allows "string Interpolation" usig `.....` and ${} for inserting the variables

console.log(`Hello my name is ${name} and my Repository count is ${repoCount}`);

// Another way of declaring a string is using Javascript objects 

const gameName = new String('HeySirii/Khalnayak/Superhero/Zephrone/Hattori/Acharya')
console.log(gameName);

console.log(gameName.toLowerCase());

console.log(gameName.toUpperCase());

console.log(gameName.endsWith('i'));

console.log(gameName.startsWith('H'));

console.log(gameName[0]);   

console.log(gameName.__proto__);

console.log(gameName.charAt(2));

console.log(gameName.indexOf('y'));

console.log(gameName.substring(0,4));

const newString = gameName.slice(-8,4);
console.log(newString);

const newStringOne = "    shreesh       "
const newStringTwo = newStringOne.trim();

console.log(newStringOne);
console.log(newStringTwo);

const url = "https://shreesh.com/shreesh%20hunnur"

console.log(url.replace('%20','-'));

console.log(url.includes('shreesh'))

console.log(gameName.split('/'));
