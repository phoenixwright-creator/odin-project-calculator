//declaration of functions to calculate
function add(a, b){
    return a+b;
}
function subtract(a, b){
    return a-b;
}
function multiply(a, b){
    return a*b;
}
function divide(a, b){
    return a/b;
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

//declaration of vars when the page is loaded
let display = document.getElementById('display');
let number1 = "";
let number2 = "";
let operator = "";
let total = "";
let decimal = false;
display.innerHTML = "";

//mouse support
document.addEventListener('click', (event) => {
    switch(event.target.id){
        case "decimal":
            if(decimal === false){
                decimal = true;
                display.innerHTML += event.target.innerHTML;
                if(operator !== ""){
                    number2 = Number(display.innerHTML);
                }
                else{
                    number1 = Number(display.innerHTML);
                }
                break;
            }
        case "zero":
            if(display.innerHTML === "+" || display.innerHTML === "-" || display.innerHTML === "*" || display.innerHTML === "/" || total !== ""){
                total = "";
                display.innerHTML = "";
            }
            display.innerHTML += event.target.innerHTML;
            if(operator !== ""){
                number2 = Number(display.innerHTML);
            }
            else{
                number1 = Number(display.innerHTML);
            }
            break;
        case "one":
            if(display.innerHTML === "+" || display.innerHTML === "-" || display.innerHTML === "*" || display.innerHTML === "/" || total !== ""){
                total = "";
                display.innerHTML = "";
            }
            display.innerHTML += event.target.innerHTML;
            if(operator !== ""){
                number2 = Number(display.innerHTML);
            }
            else{
                number1 = Number(display.innerHTML);
            }
            break;
        case "two":
            if(display.innerHTML === "+" || display.innerHTML === "-" || display.innerHTML === "*" || display.innerHTML === "/" || total !== ""){
                total = "";
                display.innerHTML = "";
            }
            display.innerHTML += event.target.innerHTML;
            if(operator !== ""){
                number2 = Number(display.innerHTML);
            }
            else{
                number1 = Number(display.innerHTML);
            }
            break;
        case "three":
            if(display.innerHTML === "+" || display.innerHTML === "-" || display.innerHTML === "*" || display.innerHTML === "/" || total !== ""){
                total = "";
                display.innerHTML = "";
            }
            display.innerHTML += event.target.innerHTML;
            if(operator !== ""){
                number2 = Number(display.innerHTML);
            }
            else{
                number1 = Number(display.innerHTML);
            }
            break;
        case "four":
            if(display.innerHTML === "+" || display.innerHTML === "-" || display.innerHTML === "*" || display.innerHTML === "/" || total !== ""){
                total = "";
                display.innerHTML = "";
            }
            display.innerHTML += event.target.innerHTML;
            if(operator !== ""){
                number2 = Number(display.innerHTML);
            }
            else{
                number1 = Number(display.innerHTML);
            }
            break;
        case "five":
            if(display.innerHTML === "+" || display.innerHTML === "-" || display.innerHTML === "*" || display.innerHTML === "/" || total !== ""){
                total = "";
                display.innerHTML = "";
            }
            display.innerHTML += event.target.innerHTML;
            if(operator !== ""){
                number2 = Number(display.innerHTML);
            }
            else{
                number1 = Number(display.innerHTML);
            }
            break;
        case "six":
            if(display.innerHTML === "+" || display.innerHTML === "-" || display.innerHTML === "*" || display.innerHTML === "/" || total !== ""){
                total = "";
                display.innerHTML = "";
            }
            display.innerHTML += event.target.innerHTML;
            if(operator !== ""){
                number2 = Number(display.innerHTML);
            }
            else{
                number1 = Number(display.innerHTML);
            }
            break;
        case "seven":
            if(display.innerHTML === "+" || display.innerHTML === "-" || display.innerHTML === "*" || display.innerHTML === "/" || total !== ""){
                total = "";
                display.innerHTML = "";
            }
            display.innerHTML += event.target.innerHTML;
            if(operator !== ""){
                number2 = Number(display.innerHTML);
            }
            else{
                number1 = Number(display.innerHTML);
            }
            break;
        case "eight":
            if(display.innerHTML === "+" || display.innerHTML === "-" || display.innerHTML === "*" || display.innerHTML === "/" || total !== ""){
                total = "";
                display.innerHTML = "";
            }
            display.innerHTML += event.target.innerHTML;
            if(operator !== ""){
                number2 = Number(display.innerHTML);
            }
            else{
                number1 = Number(display.innerHTML);   
            }
            break;
        case "nine":
            if(display.innerHTML === "+" || display.innerHTML === "-" || display.innerHTML === "*" || display.innerHTML === "/" || total !== ""){
                total = "";
                display.innerHTML = "";
            }
            display.innerHTML += event.target.innerHTML;
            if(operator !== ""){
                number2 = Number(display.innerHTML);
            }
            else{
                number1 = Number(display.innerHTML);
            }
            break;
        case "add":
            if(operator === '/' && number2 === 0){
                alert('You cannot divide a number by 0.');
                display.innerHTML = "";
                number1 = "";
                number2 = "";
                operator = "";
                total = "";
                break;
            }
            else if(number1 !== "" && number2 !== ""){
                number1 = operate(number1, number2, operator);
            }
            display.innerHTML = "+";
            operator = display.innerHTML;
            break;
        case "subtract":
            if(operator === '/' && number2 === 0){
                alert('You cannot divide a number by 0.');
                display.innerHTML = "";
                number1 = "";
                number2 = "";
                operator = "";
                total = "";
                break;
            }
            else if(number1 !== "" && number2 !== ""){
                number1 = operate(number1, number2, operator);
            }
            display.innerHTML = "-";
            operator = display.innerHTML;
            break;
        case "multiply":
            if(operator === '/' && number2 === 0){
                alert('You cannot divide a number by 0.');
                display.innerHTML = "";
                number1 = "";
                number2 = "";
                operator = "";
                total = "";
                break;
            }
            else if(number1 !== "" && number2 !== ""){
                number1 = operate(number1, number2, operator);
            }
            display.innerHTML = "*";
            operator = display.innerHTML;
            break;
        case "divide":
            if(operator === '/' && number2 === 0){
                alert('You cannot divide a number by 0.');
                display.innerHTML = "";
                number1 = "";
                number2 = "";
                operator = "";
                total = "";
                break;
            }
            else if(number1 !== "" && number2 !== ""){
                number1 = operate(number1, number2, operator);
            }
            display.innerHTML = "/";
            operator = display.innerHTML;
            break;
        case "equals":
            total = operate(number1, number2, operator);
            let hasDecimal = total - Math.floor(total) !== 0;
            if(hasDecimal){
                total = total.toFixed(2);
            }
            display.innerHTML = total;
            number1 = total;
            number2 = "";
            operator = "";
            break;
        case "clear":
            display.innerHTML = "";
            number1 = "";
            number2 = "";
            operator = "";
            total = "";
            break;
    }
});

//keyboard support
document.addEventListener('keydown', (event) => {
    switch(event.key){
        case ".":
            if(decimal === false){
                decimal = true;
                display.innerHTML += event.key;
                if(operator !== ""){
                    number2 = Number(display.innerHTML);
                }
                else{
                    number1 = Number(display.innerHTML);
                }
                break;
            }
        case "0":
            if(display.innerHTML === "+" || display.innerHTML === "-" || display.innerHTML === "*" || display.innerHTML === "/" || total !== ""){
                total = "";
                display.innerHTML = "";
            }
            display.innerHTML += event.key;
            if(operator !== ""){
                number2 = Number(display.innerHTML);
            }
            else{
                number1 = Number(display.innerHTML);
            }
            break;
        case "1":
            if(display.innerHTML === "+" || display.innerHTML === "-" || display.innerHTML === "*" || display.innerHTML === "/" || total !== ""){
                total = "";
                display.innerHTML = "";
            }
            display.innerHTML += event.key;
            if(operator !== ""){
                number2 = Number(display.innerHTML);
            }
            else{
                number1 = Number(display.innerHTML);
            }
            break;
        case "2":
            if(display.innerHTML === "+" || display.innerHTML === "-" || display.innerHTML === "*" || display.innerHTML === "/" || total !== ""){
                total = "";
                display.innerHTML = "";
            }
            display.innerHTML += event.key;
            if(operator !== ""){
                number2 = Number(display.innerHTML);
            }
            else{
                number1 = Number(display.innerHTML);
            }
            break;
        case "3":
            if(display.innerHTML === "+" || display.innerHTML === "-" || display.innerHTML === "*" || display.innerHTML === "/" || total !== ""){
                total = "";
                display.innerHTML = "";
            }
            display.innerHTML += event.key;
            if(operator !== ""){
                number2 = Number(display.innerHTML);
            }
            else{
                number1 = Number(display.innerHTML);
            }
            break;
        case "4":
            if(display.innerHTML === "+" || display.innerHTML === "-" || display.innerHTML === "*" || display.innerHTML === "/" || total !== ""){
                total = "";
                display.innerHTML = "";
            }
            display.innerHTML += event.key;
            if(operator !== ""){
                number2 = Number(display.innerHTML);
            }
            else{
                number1 = Number(display.innerHTML);
            }
            break;
        case "5":
            if(display.innerHTML === "+" || display.innerHTML === "-" || display.innerHTML === "*" || display.innerHTML === "/" || total !== ""){
                total = "";
                display.innerHTML = "";
            }
            display.innerHTML += event.key;
            if(operator !== ""){
                number2 = Number(display.innerHTML);
            }
            else{
                number1 = Number(display.innerHTML);
            }
            break;
        case "6":
            if(display.innerHTML === "+" || display.innerHTML === "-" || display.innerHTML === "*" || display.innerHTML === "/" || total !== ""){
                total = "";
                display.innerHTML = "";
            }
            display.innerHTML += event.key;
            if(operator !== ""){
                number2 = Number(display.innerHTML);
            }
            else{
                number1 = Number(display.innerHTML);
            }
            break;
        case "7":
            if(display.innerHTML === "+" || display.innerHTML === "-" || display.innerHTML === "*" || display.innerHTML === "/" || total !== ""){
                total = "";
                display.innerHTML = "";
            }
            display.innerHTML += event.key;
            if(operator !== ""){
                number2 = Number(display.innerHTML);
            }
            else{
                number1 = Number(display.innerHTML);
            }
            break;
        case "8":
            if(display.innerHTML === "+" || display.innerHTML === "-" || display.innerHTML === "*" || display.innerHTML === "/" || total !== ""){
                total = "";
                display.innerHTML = "";
            }
            display.innerHTML += event.key;
            if(operator !== ""){
                number2 = Number(display.innerHTML);
            }
            else{
                number1 = Number(display.innerHTML);
            }
            break;
        case "9":
            if(display.innerHTML === "+" || display.innerHTML === "-" || display.innerHTML === "*" || display.innerHTML === "/" || total !== ""){
                total = "";
                display.innerHTML = "";
            }
            display.innerHTML += event.key;
            if(operator !== ""){
                number2 = Number(display.innerHTML);
            }
            else{
                number1 = Number(display.innerHTML);
            }
            break;
        case "+":
            if(operator === '/' && number2 === 0){
                alert('You cannot divide a number by 0.');
                display.innerHTML = "";
                number1 = "";
                number2 = "";
                operator = "";
                total = "";
                break;
            }
            else if(number1 !== "" && number2 !== ""){
                number1 = operate(number1, number2, operator);
            }
            display.innerHTML = "+";
            operator = display.innerHTML;
            break;
        case "-":
            if(operator === '/' && number2 === 0){
                alert('You cannot divide a number by 0.');
                display.innerHTML = "";
                number1 = "";
                number2 = "";
                operator = "";
                total = "";
                break;
            }
            else if(number1 !== "" && number2 !== ""){
                number1 = operate(number1, number2, operator);
            }
            display.innerHTML = "-";
            operator = display.innerHTML;
            break;
        case "*":
            if(operator === '/' && number2 === 0){
                alert('You cannot divide a number by 0.');
                display.innerHTML = "";
                number1 = "";
                number2 = "";
                operator = "";
                total = "";
                break;
            }
            else if(number1 !== "" && number2 !== ""){
                number1 = operate(number1, number2, operator);
            }
            display.innerHTML = "*";
            operator = display.innerHTML;
            break;
        case "/":
            if(operator === '/' && number2 === 0){
                alert('You cannot divide a number by 0.');
                display.innerHTML = "";
                number1 = "";
                number2 = "";
                operator = "";
                total = "";
                break;
            }
            else if(number1 !== "" && number2 !== ""){
                number1 = operate(number1, number2, operator);
            }
            display.innerHTML = "/";
            operator = display.innerHTML;
            break;
        case "=":
            total = operate(number1, number2, operator);
            let hasDecimal = total - Math.floor(total) !== 0;
            if(hasDecimal){
                total = total.toFixed(2);
            }
            display.innerHTML = total;
            number1 = total;
            number2 = "";
            operator = "";
            break;
        case "Backspace":
            display.innerHTML = display.innerHTML.slice(0, display.innerHTML.length-1);
            if(operator !== ""){
                number2 = Number(display.innerHTML);
            }
            else{
                number1 = Number(display.innerHTML);
            }
            break;
        case "Delete":
            display.innerHTML = "";
            number1 = "";
            number2 = "";
            operator = "";
            total = "";
            break;
    }
});