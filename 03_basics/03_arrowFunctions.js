const welcomeMessage = () => (console.log(`Hello User !! Welcome to our website`))

welcomeMessage()

const addTwoNumbers = (num1,num2) => (console.log(num1+num2))

addTwoNumbers(4,5)

const user = {
    username: "shreesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "shreesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "shreesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "shreesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "shreesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()