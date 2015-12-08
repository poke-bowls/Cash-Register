var calculator = function() {
  //Private variables
  var eqInput,
      currNumberInput,
      equalsPressed = false,
      operator,
      operatorSet = false,
      memory = null,

  start = function(equals, currNumber) {
    eqInput = equals;
    currNumberInput = currNumber;
  },

  add = function (x, y) {
    var sum = x + y;
    return sum.toFixed(2);
  },

  subtract = function (x, y) {
    var difference = x - y;
    return difference.toFixed(2);
  },

  multiply = function (x, y) {
    var product = x * y;
    return product.toFixed(2);
  },

  divide = function (x, y) {
    if (y === 0) {
      alert("Error: Can't divide by 0");
    }
    var quotient = x / y;
    return quotient.toFixed(2);
  },

  setValue = function (value) {
    currNumberInput.innerHTML = value;
  },

  setEquation = function (value) {
    eqInput.innerHTML = value;
  },

  clearNumbers = function () {
    memory = null;
    equalsPressed = false;
    operatorSet = false;
    setValue('0');
    setEquation('');
  },

  clickNumber = function (event) {
    var button = (event.target) ? event.target : event.srcElement;
    if (operatorSet === true || currNumberInput.innerHTML === '0') {
      setValue('');
      operatorSet = false;
    }
    setValue(currNumberInput.innerHTML + button.innerHTML);
    setEquation(eqInput.innerHTML + button.innerHTML);
  },

  //Function should handle if operator was = or +, -, *, /
  setOperator = function(newOperator) {
    if (newOperator == '=') {
      equalsPressed = true;
      calculate();
      setEquation('');
      return;
    }
    //If = pressed then a new operator (+, -, *, /), hando dat
    if (!equalsPressed) {
      //set the input (button pressed) to the var operator
      operator = newOperator;
      //make sure equals pressed is set to false
      equalsPressed = false;
      //run our calculate function to compute the new value with the set operation
      calculate();
      //note that the operator is now set
      operatorSet = true;
      //parse the string located in calculator, returning a number. Save this to the memory var
      memory = parseFloat(currNumberInput.innerHTML);
      /*If the string in the equation part of calculator is empty, save the current Number
      (stored in memory) and operator to the var eqText.  If not, add the operator to the
      string in the equation part of calculator and store it in eqText. */
      var eqText = (eqInput.innerHTML === '') ? memory + ' ' + operator + ' ' : eqInput.innerHTML + ' ' + operator + ' ';
      //set eqText to the equation part of the calculator
      setEquation(eqText);
    }
  },

  //Calculate depending on what operator was passed +, -, *, /
  calculate = function() {
    if (!operator || memory === null) {
      return;
    }

    var newValue = 0,
        currNumber = parseFloat(currNumberInput.innerHTML);
    switch(operator){
      case '+':
        newValue = add(memory, currNumber);
        break;
      case '-':
        newValue = subtract(memory, currNumber);
        break;
      case '*':
        newValue = multiply(memory, currNumber);
        break;
      case '/':
        newValue = divide(memory, currNumber);
        break;
    }
    setValue(newValue);
    memory = newValue;
  };
  //Public variables
  return {
    start: start,
    clickNumber: clickNumber,
    setOperator: setOperator,
    clearNumbers: clearNumbers
  };
}();