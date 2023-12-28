// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')


//Iffe is used to immediately invoke the function. Also one of the main resaon of using iffe is to avoid global scope pollution. Many a times the global variables may pollute the function and it may nit work. in order to avoid it we use IFFEE