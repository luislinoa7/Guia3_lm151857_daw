let currentInput = '';
let currentOperation = '';
let previousInput = '';

function appendToResult(value) {
  currentInput += value;
  document.getElementById('result').value = currentInput;
}

function performOperation(operation) {
  currentOperation = operation;
  previousInput = currentInput;
  currentInput = '';
}

function calculateResult() {
  let result = 0;
  const num1 = parseFloat(previousInput);
  const num2 = parseFloat(currentInput);

  switch (currentOperation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
  }

  currentInput = result.toString();
  document.getElementById('result').value = currentInput;
}

function clearResult() {
  currentInput = '';
  currentOperation = '';
  previousInput = '';
  document.getElementById('result').value = '';
}
