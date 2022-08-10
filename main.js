//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/
 
let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

//could be done both ways depending on what is exactly asked...

//1 itterate values
function dishes(){
    return Object.values(person3)
}
console.log(dishes())

//2 itterate as a whole
function favDishes(){
    {return person3
    }
}
console.log(favDishes())

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
}
// Use an arrow to create the printInfo method
    printInfo = () => {
    return `Name: ${this.name}\n Age: ${this.age}`
    }


// Create another arrow function for the addAge method that takes a single parameter
const addAge = (()=>{
    const ages = [];
    return (age)=>{
        ages.push(age)
        return
    }
})

// Adding to the age 
    countUP = function() {
    let counter = 0;
    console.log('Hit')
    return function () { return counter++}
}

let p1 = new Person(mikey, 34);
let p2 = new Person(Sammie, 32);

console.log(p1.printInfo())
console.log(p2.printInfo())
console.log(p1.countUp())
console.log(p1.countUp())
console.log(p1.countUp())






// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const greaterNum = (string) => {
    return new Promise( (resolve,reject) => {
        if( string.length >= 10){
            resolve('Small Number')
        } else {
            console.log(reject('Big word!'))
        }
    })
}

console.log(greaterNum('supercalfagalisticasomethingsomethingsomething'))




// ----------------------------CODE WARS ----------------------------


// https://www.codewars.com/kata/55685cd7ad70877c23000102

//Return Negative

function make_negative( m ){
    if (m < 0){
        return m}
    else{
        return -m}
}


// https://www.codewars.com/kata/53369039d7ab3ac506000467

//Convert boolean values to strings 'Yes' or 'No'.

function boolToWord( x ){
    if (x == true){
        return "Yes"}
    else{
        return "No"}
}