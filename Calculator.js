// Start the table once
Document.write("<table border='1' cellpadding='10'>");
Document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");

while (true) {
  // Prompt for first number
  let xStr = prompt("Enter the first number (x):");
  if (xStr === null) break;
  let x = parseFloat(xStr);

  // Prompt for second number
  let yStr = prompt("Enter the second number (y):");
  if (yStr === null) break;
  let y = parseFloat(yStr);

  // Prompt for operator
  let operator = prompt("Enter an operator (+, -, *, /, %):");
  if (operator === null) break;

  let result;

  // Validate inputs
  if (isNaN(x) || isNaN(y)) {
    result = "Error: One or both inputs are not valid numbers.";
  } else {
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
        result = "Error: Invalid operator";
    }
  }

  // Display the result in a table row
  Document.write("<tr><td>" + xStr + "</td><td>" + operator + "</td><td>" + yStr + "</td><td>" + result + "</td></tr>");
}

// Close the table after loop ends
Document.write("</table>");
