const myArr = [2,8];
console.log(myArr[0])

const MyArr2 = new Array("Shreesh","VIraj",true,0,23)
console.log(MyArr2[1]);

// Array Methods

// myArr.push(10);
// console.log(myArr);

// myArr.pop(); //The lst element of the array is popped

myArr.unshift(10); // Adds the given element to the start of the array
console.log(myArr);
myArr.shift();  //Similar to pop but pops the 1st element of the array
console.log(myArr);


myArr.push(13);
myArr.push(3);
myArr.push(43);
myArr.push(12);
myArr.push(87);
myArr.push(1);

myArr.sort((a,b)=> b-a); // sorts the array in the descending order
console.log(myArr.indexOf(0)) // If element not found then it returns -1 if found then returns the index 
console.log(myArr.includes(10)); // this returns a bool

const newArr = myArr.join();//converts the array into string

console.log(myArr);
console.log(newArr);

console.log(myArr.slice(1,4));//doesnot manipulate the original array
console.log(myArr.splice(1,4));// maipulated the original array
