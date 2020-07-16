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
