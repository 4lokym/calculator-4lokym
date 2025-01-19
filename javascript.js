let num1 = null;
let num2 = null;
let operator = null;

let screenValue = "";
const screenTextContainer = document.querySelector(".text");

const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => buttonsPress(e));

function buttonsPress(e){
    if(e.target.tagName == "BUTTON" && e.target.textContent != "Clear" 
        && screenValue.length < 13){

        populateScreen(e.target.textContent);
        screenValue = screenTextContainer.textContent;

    }else if(e.target.textContent == "Clear"){
        clearScreen();
        screenValue = "";
    }

    console.log(screenValue.length);
    console.log(screenValue);
}

function clearScreen(){
    screenTextContainer.textContent = "";
}

function populateScreen(str){
    screenTextContainer.textContent = screenTextContainer.textContent.concat(`${str}`);
}

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(a, operator, b){
    switch (operator){
        case "+":
        return add(a, b);
        break;

        case "-":
        return subtract(a, b);
        break;

        case "*":
        return multiply(a, b);
        break;

        case "/":
        return divide(a, b);
        break;

        default:
        return "Invalid operator";
    }
}