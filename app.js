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
    for(i =0; i < array.length; i++){
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

    return result;

}

function addNumbers(num1, num2){

    for(i =0; i < array.length; i++){
        let numbers = array[i]
        
        console.log(numbers); 
    }
    
    callback(num1, num2);

}

function subtractNumbers(num1, num2){
    for(i =0; i < array.length; i--){
        let numbers = array[i]
        
        console.log(numbers); 
    }
    
    callback(num1, num2);

}


console.log(calculator(5,77, addNumbers, subtractNumbers));