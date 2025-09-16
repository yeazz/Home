// Start the main results table
document.write("<table border='1' cellpadding='10'>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");

let validResults = []; // Store only numeric results

while (true) {
  let xStr = prompt("Enter the first number (x):");
  if (xStr === null) break;
  let x = parseFloat(xStr);

  let yStr = prompt("Enter the second number (y):");
  if (yStr === null) break;
  let y = parseFloat(yStr);

  let operator = prompt("Enter an operator (+, -, *, /, %):");
  if (operator === null) break;

  let result;

  if (isNaN(x) || isNaN(y)) {
    result = "Error: Invalid number input";
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

  // Store valid numeric results
  if (typeof result === "number" && !isNaN(result)) {
    validResults.push(result);
  }

  // Display each row
  document.write("<tr><td>" + xStr + "</td><td>" + operator + "</td><td>" + yStr + "</td><td>" + result + "</td></tr>");
}

document.write("</table>");

// 🧮 Calculate summary statistics
if (validResults.length > 0) {
  let total = validResults.reduce((sum, val) => sum + val, 0);
  let min = Math.min(...validResults);
  let max = Math.max(...validResults);
  let avg = total / validResults.length;

  // Display summary table
  document.write("<br><h3>Summary of Valid Results</h3>");
  document.write("<table border='1' cellpadding='10'>");
  document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
  document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg.toFixed(2) + "</td><td>" + total + "</td></tr>");
  document.write("</table>");
} else {
  document.write("<p>No valid results to summarize.</p>");
}
