function multiply(num1, num2){
  return num1 * num2;
}

function getNumber(prompt){
  let rlSync = require('readline-sync');
  let number = rlSync.question(prompt);
  return number;
}

let firstNumber = Number(getNumber("Enter the first number: "));
let secondNumber = Number(getNumber("Enter the second number: "));
console.log(`${firstNumber} + ${secondNumber} = ${multiply(firstNumber, secondNumber)}`);