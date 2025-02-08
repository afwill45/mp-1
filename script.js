function addition() {
    var a = parseFloat(document.getElementById("first-number").value);
    var b = parseFloat(document.getElementById("second-number").value);
    var result = a + b;
    displayResult(result);
  }
  
  function subtraction() {
    var a = parseFloat(document.getElementById("first-number").value);
    var b = parseFloat(document.getElementById("second-number").value);
    var result = a - b;
    displayResult(result);
  }
  
  function multiplication() {
    var a = parseFloat(document.getElementById("first-number").value);
    var b = parseFloat(document.getElementById("second-number").value);
    var result = a * b;
    displayResult(result);
  }
  
  function division() {
    var a = parseFloat(document.getElementById("first-number").value);
    var b = parseFloat(document.getElementById("second-number").value);
    if (b === 0) {
      displayResult("Error: Division by zero");
      return;
    }
    var result = a / b;
    displayResult(result);
  }
  
  function power() {
    var base = parseFloat(document.getElementById("first-number").value);
    var exp = parseInt(document.getElementById("second-number").value, 10);
    var result = 1;
    for (var i = 0; i < exp; i++) {
      result *= base;
    }
    displayResult(result);
  }
  
  function clearCalculator() {
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";
    document.getElementById("output").style.color = "black";
  }
  
  function displayResult(result) {
    var output = document.getElementById("output");
    output.innerHTML = String(result);
    if (typeof result === "number" && result < 0) {
      output.style.color = "red";
    } else {
      output.style.color = "black";
    }
  }
  