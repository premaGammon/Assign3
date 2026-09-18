// calculator.js
// Repeatedly prompts the user for two numbers and an operator,
// computes the result, and displays everything in a table.
// When the user clicks Cancel, the loop stops and a summary table
// of valid results is displayed.

// Array to hold all valid (non-error) numeric results
var results = [];

// Flag used to control the loop
var keepGoing = true;

// Start the results table
document.write("<table>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");

while (keepGoing) {

  // Prompt for the first number
  var xInput = prompt("Enter the first number (x):");
  if (xInput === null) {
    keepGoing = false;
    break;
  }

  // Prompt for the second number
  var yInput = prompt("Enter the second number (y):");
  if (yInput === null) {
    keepGoing = false;
    break;
  }

  // Prompt for the operator
  var operator = prompt("Enter an operator (+, -, *, /, %):");
  if (operator === null) {
    keepGoing = false;
    break;
  }

  // Convert the inputs to numbers
  var x = parseFloat(xInput);
  var y = parseFloat(yInput);

  var result; // will hold either a number or an error message

  // Validate the numbers first
  if (isNaN(x) || isNaN(y)) {
    result = "Error: Non-numeric input";
  } else {
    // Validate and apply the operator
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
        if (y === 0) {
          result = "Error: Division by zero";
        } else {
          result = x / y;
        }
        break;
      case "%":
        if (y === 0) {
          result = "Error: Division by zero";
        } else {
          result = x % y;
        }
        break;
      default:
        result = "Error: Invalid operator";
    }
  }

  // Write a row to the table
  document.write("<tr><td>" + xInput + "</td><td>" + operator + "</td><td>" + yInput + "</td><td>" + result + "</td></tr>");

  // If the result was a valid number, store it for the summary table
  if (typeof result === "number" && !isNaN(result)) {
    results.push(result);
  }
}

// Close the results table
document.write("</table>");

// ---------- Summary Table ----------

document.write("<h2>Summary of Valid Results</h2>");

if (results.length > 0) {
  var min = Math.min.apply(null, results);
  var max = Math.max.apply(null, results);
  var total = results.reduce(function (sum, val) {
    return sum + val;
  }, 0);
  var avg = total / results.length;

  document.write("<table>");
  document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
  document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg.toFixed(2) + "</td><td>" + total + "</td></tr>");
  document.write("</table>");
} else {
  document.write("<p class='error'>No valid numeric results were entered.</p>");
}
