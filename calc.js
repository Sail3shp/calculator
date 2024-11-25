let display = document.getElementById("display");
display.textContent= "0";
let currentOperator = null;
let firstNumber = null;
let waitingForSecondNumber = false;

//reset button
let reset = document.getElementById("reset");
reset.addEventListener('click',() =>{
     display.textContent = '0';
     currentOperator = null; 
     firstNumber = null;
     waitingForSecondNumber = false;
});
//every function

function sum (a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    if(b==0){
        return "NaN";
    }
    return a/b;
}
//operator function 
function operator(sign,firstNumber,secondNumber){
    switch(sign){
        case '+':
            return sum(firstNumber,secondNumber);
        case '-':
            return sub(firstNumber,secondNumber);
        case '*':
            return multiply(firstNumber,secondNumber);
        case '/':
            return divide(firstNumber,secondNumber);
        default:
            return secondNumber;
    }




}


let buttons = document.querySelectorAll('button');
  buttons.forEach(function(button){
    button.addEventListener('click',function(){
       let buttonText = button.textContent;

       if(!isNaN(buttonText)){
        if(waitingForSecondNumber){
            display.textContent = buttonText;
            waitingForSecondNumber = false;
        }else{
            if(display.textContent === "0"){
                display.textContent = buttonText;
            }else{
                display.textContent += buttonText;
            }
          }
       }
       else if(buttonText === '.'){
        if(!(display.textContent).includes('.')){
            display.textContent += '.';
        }
       }

//for operator 
       else if(buttonText === '+' || buttonText ==='-' || buttonText === '*' || buttonText === '/'){
            if(firstNumber == null){
                firstNumber = parseFloat(display.textContent);
            }
            else if(currentOperator){
                firstNumber = operator(currentOperator,firstNumber,parseFloat(display.textContent));
                display.textContent = firstNumber;
            }
            currentOperator = buttonText;
            waitingForSecondNumber = true;
       }
       // = operation
       else if(buttonText === '='){
            if(firstNumber !== null && currentOperator!== null){
                let result = operator(currentOperator,firstNumber,parseFloat(display.textContent));
                display.textContent = result;
                firstNumber = result;
                currentOperator = null;
                waitingForSecondNumber = false;

            }
       }
       else if(buttonText === "%"){
            parseFloat(display.textContent = display.textContent / 100);        
       }
       else if(buttonText === "X"){
        display.textContent = Math.floor(display.textContent/10);
       }
        })
  }); 