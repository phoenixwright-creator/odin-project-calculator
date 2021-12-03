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
            add(a, b);
            break;
        case "-":
            subtract(a, b);
            break;
        case "*":
            multiply(a, b);
            break;
        case "/":
            divide(a, b);
            break;
    }
}

let numbers = document.querySelectorAll('.numbers');
let display = document.querySelector('#display');

let number1 = "";
let number2 = "";
console.log(numbers);
for(let item in numbers){
    numbers[item].addEventListener('click', (event) => {
        //console.log(event);
        number1 += event.target.innerHTML;
        display.innerHTML = number1;
        //console.log(number1);
    });
}

