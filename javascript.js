let num1 = null;
let num2 = null;
let operator = null;

let screenContent = null;
const screen = document.querySelector(".screen");

const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e)=>{
    if(e.target.tagName == "BUTTON" && e.target.textContent != "Clear"){
        populateScreen(e.target.textContent)
    }
});


function populateScreen(str){
    screen.textContent += str;
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