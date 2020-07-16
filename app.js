function greeting(name, callback){
    let sentence = 'Hello, my name is ' + name + ' ';

    let otherSentence = callback(); //return result of what i called back

    return sentence + otherSentence; 
}


function anotherGreeting(){
    let sentence = ' I forgot, my last name';
    
    return sentence; //want this function to take in call back
}

let myName = 'Channe'
console.log(greeting(myName, anotherGreeting)); //return hello, my name is chann +e i forgot

//Exercice
// print elements in array and use call back to print again
function printArray(array, callback) {
    for(let i =0; i < array.length; i++){
        let numbers = array[i] //grab each number 1,2 ...
        
        console.log(number); //1
    }
    
    callback(array);// will print the above

}

function printArrayAgain(array){
    for (let i = 0; i < array.length; i++){
        let number = array[i]; //1,2,
        
        console.log(number);//1 , 2
    }
}

const numbersArray = [1,2,3,4,5,6,7,8,9];

printArray(numbersArray, printArrayAgain);

//Exercise take both numbers add those together and return those 
//

function calculator(num1, num2, callbackOne, callbackTwo){

    let result = callbackOne(num1, num2) + callbackTwo(num1, num2)
    // will return 82 + -72 = 10

    return result;

}

function addNumbers(num1, num2){
    let result = num1 + num2; 
  return result; 
}

function subtractNumbers(num1, num2){
    let result = num1 - num2;
    return result;
}


console.log(calculator(5,77, addNumbers, subtractNumbers));

// make a super hero function
function batMan(superPowerOne, superPowerTwo){
    let allSuperPowers =  superPowerOne() + ' and ' + superPowerTwo();

    return allSuperPowers
}

function superBat(){
    let power = 'I can beat any super hero'
    
    return power;
}

function superMind(){
    let mind = 'I am master tactician';
    
    return mind;
}

console.log(batMan(superBat, superMind));

// take in 2 call backs 
// return a strung in each one of the call backs describing the super power
// each call back function will return a messge


function blastOff(){
    let num = 0; // set variable

    // set up for loop
    for(let i = 10; i>= num; i--){
        console.log(i)// 10, 9, 8, 7
}

console.log('Blast OFF!!!!')

// setTimeout(blastOff, 5000); //5000 is 5 sec in millisec

//make functino that prints  your name 
//setTimeout and pass in function and a time.
// function printName(name){
//     console.log(name);
// }

//setTimeout
// let myNameTwo = 'Channee';
// setTimeout(function(){
//     printName(myNmeTwo);
// }, 5000); //printed immediately name and 5 seconds later ran blaset
//inside you can make a function

//iterators 
// forEach

const collectables = ['Bomag', 'CMI Corp', 'Wrtgen', 'Catepiller'];
//for each does simmilar to for loop let i=0....
collectables.forEach(function(element){
    console.log(element);
})

//each element will print to screen

collectables.forEach(element => {
    if (element.length > 6 {
        console.log(element);
    }
});

//map it goes through every element and makes new array
// of whatever you deside to change in each element

const someNumebrs = [23,65,347,34];
const addFive = someNumbers.map(element => {
    return element + 5;
})

// will set up hiidden [array] [29, 70, 352, 39]
// .map returns an array
// you have to return something  element plus 5
console.log(addFive);


// filter does similar structure
// return only what you filter out

const filteredNumbers = someNumbers.filter(element => {
    //condition
    if (element > 50){
        return element;
    }
});
console.log(filteredNumbers)
//going to put this in array 65 cuz greater than 50, 347
