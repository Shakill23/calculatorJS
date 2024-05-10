let num1 = Number(prompt("Enter a number:"));
let num2 = Number(prompt("Enter second number:"));
let operation = prompt(
  "Type in the operation you would like to perform on these numbers:\n\nAddition\nSubtraction\nMultiplication\nDivision"
).toUpperCase();

let result;

switch (operation) {
  case "ADDITION":
    result = num1 + num2;
    break;
  case "SUBTRACTION":
    result = num1 - num2;
    break;
  case "MULTIPLICATION":
    result = num1 * num2;
    break;
  case "DIVISION":
    result = num1 / num2;
    break;
  default:
    result = "Invalid operation";
}

document.getElementById("result").textContent = `Result: ${result}`;
