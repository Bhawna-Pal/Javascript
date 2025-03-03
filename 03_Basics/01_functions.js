 
function sayMyName() {
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("W");
    console.log("N");
    console.log("A");  
}

// sayMyName()

// function addTwoNumber(number1, number2) {

//     console.log(number1 + number2);   
// }

function addTwoNumber(number1, number2) {

    // let result = number1 + number2
    // return result  
    return number1 + number2
}

const result = addTwoNumber(3, 5)

// console.log("Result:", result);


function loginUserMessage(username = "sam") {
    if(!username){
        console.log("Please enter a Username"); 
        return    
    }
     return `${username} just logged in `
}
 
// console.log(loginUserMessage("Bhawna"))
console.log(loginUserMessage("Bhawna"))