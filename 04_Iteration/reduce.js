const myNums = [1, 2, 3]

const arraySum = myNums.reduce(function(acc , curr) {
    return acc + curr
}, 0)
//console.log(arraySum);

const mySum2 = myNums.reduce( (arr,curr) => arr+curr,0)
// console.log(mySum2);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const TotalShoppingPrice = shoppingCart.reduce( (acc,cartItem) => acc + cartItem.price , 0)
console.log(TotalShoppingPrice);