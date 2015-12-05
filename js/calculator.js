var calculator = function() {
  //Public variables
  var memory = 0,
  total = 0,
  equalsPressed = false,
  operator,
  operatorSet = false,

  recallMemory = function () {
    return memory;
  },

  memoFun = function(input) {
    if (memory === 0) {
      memory = input;
    } else {
      memory = memory.toString() + input.toString();
      memory = Number(memory);
    }
  },

  setOperator = function(newOperator) {
    if (newOperator == '=') {
      equalsPressed = true;
    }
  },

  load = function (x) {
    total = x;
    return total;
  },

  add = function (x, y) {
    return x + y;
  },

  subtract = function (x, y) {
    return x - y;
  },

  multiply = function (x, y) {
    return x * y;
  },

  divide = function (x, y) {
    if (y === 0) {
      alert("Error: Can't divide by 0");
    }
    return x / y;
  },

  calculate = function() {

  };
  return {

  };
} ();