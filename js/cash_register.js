var register = function() {
  //Private variables
  var balance = 0,

  start = function(equals, currNumber) {
    eqInput = equals;
    currNumberInput = currNumber;
  },

  getBalance = function() {
    currNumberInput.innerHTML = "$ " + balance.toFixed(2);
    eqInput.innerHTML = '';
  },

  deposit = function() {
    var currNumber = parseFloat(currNumberInput.innerHTML);
    balance += currNumber;
    calculator.clearNumbers();
  },

  withdraw = function() {
    var currNumber = parseFloat(currNumberInput.innerHTML);
    if((balance - currNumber) >= 0){
    balance -= currNumber;
    } else {
      currNumberInput.innerHTML = "Insufficient Funds";
    }
    calculator.clearNumbers();
  };
  //Public variables
  return {
    start: start,
    getBalance: getBalance,
    withdraw: withdraw,
    deposit: deposit
  };
}();
