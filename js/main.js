function calculate(){
    const inputFirst = document.getElementById('input-one');
    const firstText =inputFirst.value;
    const firstNumber = parseFloat(firstText);
    inputFirst.value = '';
    console.log(firstNumber)
    return firstNumber;
}
 
function calculateTwo(){
    const inputSecond = document.getElementById('second-number');
    const secondText =inputSecond.value;
    const secondNumber = parseFloat(secondText);
    inputSecond.value = '';
   
    return secondNumber;
}
 
function calculateSymbol(){
 const Symbol =document.getElementById('symbol');
 const Symboles = Symbol.value;
 const firstNumber =calculate()
 const secondNumber = calculateTwo()
 if (Symbol.value  == '+')
 {
 Symbol.value = firstNumber +secondNumber
 }
  else if (Symbol.value  == '-')
 {
 Symbol.value = firstNumber - secondNumber
 }
 else if (Symbol.value  == '*')
 {
 Symbol.value = firstNumber * secondNumber
 }
 else if (Symbol.value  == '/')
 {
 Symbol.value = firstNumber /secondNumber
 }
}

document.getElementById('add-btn').addEventListener('click', function(){
    calculateSymbol()
})