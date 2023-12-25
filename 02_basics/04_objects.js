const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


const NewUser= {
    email : "Some@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Shreesh",
            lastName : "Hunnur"
        }
    }
}

// console.log(NewUser.fullName.userFullName.firstName)

//How to combine 2 objects using assign property

 const obj1 = {1: "a",2:"b"}
 const obj2 = {3: "a",4:"b"}
 const obj4 = {5: "a",6:"b"}

//  const obj3 = Object.assign({},obj1,obj2,obj4)  //{} shows the target object and rest are the source objects that are combined and stored in the target object

// another way is to use the spread operator

const obj3 = {...obj1,...obj2,...obj4}
//  console.log(obj3);


console.log(Object.keys(tinderUser))  //returns the array of the keys inside the object
console.log(Object.values(tinderUser)) // return the array of the values inside the object 
console.log(Object.entries(tinderUser)) //returns an array of array in which each array has its first element as the id and the second element as the keys
console.log(tinderUser.hasOwnProperty('isLogged')) //used to chechk if particular id is present or not
