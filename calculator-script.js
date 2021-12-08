function add(a, b){
    return Number(a)+Number(b);
}

function subtract(a, b){
    return Number(a)-Number(b);
}

function multiply(a, b){
    return Number(a)*Number(b);
}

function divide(a, b){
    return Number(a)/Number(b);
}

function operate(a, b, operator){
    switch(operator){
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}

let display = document.getElementById('display');
let number1 = 0;
let number2 = 0;
let operator = "";
let total = 0;

document.addEventListener('click', (event) => {
    
    switch(event.target.id){
        case "zero":
            display.innerHTML += parseInt(event.target.innerHTML);
            break;
        case "one":
            display.innerHTML += parseInt(event.target.innerHTML);
            break;
        case "two":
            display.innerHTML += parseInt(event.target.innerHTML);
            break;
        case "three":
            display.innerHTML += parseInt(event.target.innerHTML);
            break;
        case "four":
            display.innerHTML += parseInt(event.target.innerHTML);
            break;
        case "five":
            display.innerHTML += parseInt(event.target.innerHTML);
            break;
        case "six":
            display.innerHTML += parseInt(event.target.innerHTML);
            break;
        case "seven":
            display.innerHTML += parseInt(event.target.innerHTML);
            break;
        case "eight":
            display.innerHTML += parseInt(event.target.innerHTML);
            break;
        case "nine":
            display.innerHTML += parseInt(event.target.innerHTML);
            break;
        case "add":
            operator = "+";
            if(number1 === 0){
                number1 = display.innerHTML;
                console.log(number1);
            }
            else{
                display.innerHTML = number1;
                number2 = display.innerHTML;
                number1 = operate(number1, number2, operator);
                number2 = 0;
                console.log("Total :", number1);
            }
            display.innerHTML = "";
            break;
        case "subtract":
            operator = "-";
            if(number1 === 0){
                number1 = display.innerHTML;
            }
            else{
                number2 = display.innerHTML;
                number1 = operate(number1, number2, operator);
                number2 = 0;
                console.log("Total :", number1);
            }
            display.innerHTML = "";
            break;
        case "multiply":
            operator = "*";
            number1 = parseInt(display.innerHTML);
            display.innerHTML = "";
            break;
        case "divide":
            operator = "/";
            number1 = parseInt(display.innerHTML);
            display.innerHTML = "";
            break;
        case "equals":
            
            total = operate(number1, number2, operator);
            display.innerHTML = total;
            break;
        case "clear":
            display.innerHTML = "";
            number1 = 0;
            number2 = 0;
            operator = 0;
            total = 0;
            break;
    }
});


