// calculator.js

while (true) {
  // Prompt for first number
  let x = prompt("Enter the first number (x):");
  if (x === null) break; // User clicked Cancel
  x = parseFloat(x);

  // Prompt for second number
  let y = prompt("Enter the second number (y):");
  if (y === null) break;
  y = parseFloat(y);

  // Prompt for operator
  let operator = prompt("Enter an operator (+, -, *, /, %):");
  if (operator === null) break;

  let result;

  // Perform calculation
  switch (operator) {
    case "+":
      result = x + y;
      break;
    case "-":
      result = x - y;
      break;
    case "*":
      result = x * y;
      break;
    case "/":
      result = y !== 0 ? x / y : "Error: Division by zero";
      break;
    case "%":
      result = y !== 0 ? x % y : "Error: Modulus by zero";
      break;
    default:
      result = "Invalid operator";
  }

  // Show result
  alert(`Result: ${result}`);
}
