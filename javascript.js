let num1 = null;
let num2 = null;
let operator = null;

let screenValue = "";
const screenTextContainer = document.querySelector(".text");

const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => buttonsPress(e));




function buttonsPress(e){
    let buttonPressed = e.target;

    //character limt, and distinguish between normal buttons and clear button;
    if(buttonPressed.tagName == "BUTTON" && buttonPressed.textContent != "Clear" 
        && screenValue.length < 13){

        if(buttonPressed.classList.contains("digit-buttons")){
            appendScreen(buttonPressed.textContent);
        }else if(buttonPressed.classList.contains("operator-buttons")){
            //if the screenValue.length = 1 and is an operator, replace it
            if(screenValue.length == 1 && operator){
                updateScreen(buttonPressed.textContent);
                operator = buttonPressed.textContent;

            //if the last char is and operator, replace it
            }else if(screenValue.at(-1) == operator){
                updateScreen(""+screenValue.slice(0,-1)
                +buttonPressed.textContent);
                operator = buttonPressed.textContent;

            //if it has already an operator do calculations and make it ready for next calculations
            }else if(operator && screenValue.length > includesOperator(screenValue)+1){
                num2 = screenValue.slice(includesOperator(screenValue)+1);
                updateScreen(operate(num1, operator, num2));
                operator = buttonPressed.textContent;
                num1 = screenValue;
                num2 = null;
                appendScreen(operator);

            //if screenValue.lenght is >= 1 and hasn't an operator, add one
            }else if(!operator){
                num1 = screenValue;
                operator = buttonPressed.textContent;
                appendScreen(operator);
            }else{
            //if screenValue.length is less than 1, add an operator
                appendScreen(buttonPressed.textContent);
            }
        }else if(buttonPressed.id === "equals"){

            if(num1 && operator && !num2 && (screenValue.at(-1) != operator)){
                num2 = screenValue.slice(includesOperator(screenValue)+1);
            }

            if(num1 && num2 && operator){
                updateScreen(operate(num1, operator, num2));
                num1 = screenValue;
                num2 = null;
                operator = null;
            }
        }
        
    }else if(buttonPressed.id == "clear"){
        clearProcess();
    }
}

function includesOperator(str){
    const operators = "+-/*"
    for(let i =0; i<str.length; i++){
        if(operators.includes(str[i])){
            return i;
        }
    }
    return null;
}

function clearProcess(){
    clearScreen();
    num1 = null;
    num2 = null;
    operator = null;
    screenValue = "";
}

function clearScreen(){
    screenTextContainer.textContent = "";

}

function updateScreen(str){
    str = str.toString();
    if(str === "Infinity"){
        ERR("ERR 0 division");
        return;
    }else if(str === "NaN"){
        ERR("ERR 0/0");
        return;
    }
    screenTextContainer.textContent = str;
    screenValue = str;
}

function appendScreen(str){
    screenTextContainer.textContent = screenTextContainer.textContent.concat(`${str}`);
    screenValue = screenTextContainer.textContent;
}

function add(a, b){
    return a+b;
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

function ERR(str){
    updateScreen(str);
    num1 = null;
    num2 = null;
    operator = null;
}

function operate(a, operator, b){
    a = Number.parseInt(a);
    b = Number.parseInt(b);
    let answer;
    switch (operator){
        case "+":
        answer = add(a, b);
        break;

        case "-":
        answer = subtract(a, b);
        break;

        case "*":
        answer = multiply(a, b);
        break;

        case "/":
        answer = divide(a, b);
        answer = Math.round(answer*10) / 10;
        break;

        default:
        return "Invalid operator";
    }


    return answer;
}