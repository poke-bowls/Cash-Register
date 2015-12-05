document.getElementById("seven").addEventListener("click", inputSeven);
document.getElementById("eight").addEventListener("click", inputEight);
document.getElementById("nine").addEventListener("click", inputNine);
document.getElementById("divide").addEventListener("click", divideFunc);
document.getElementById("clear").addEventListener("click", clearMemory);
document.getElementById("four").addEventListener("click", inputFour);
document.getElementById("five").addEventListener("click", inputFive);
document.getElementById("six").addEventListener("click", inputSix);
document.getElementById("multiply").addEventListener("click", multiplyFunc);
document.getElementById("getBalance").addEventListener("click", getTotal);
document.getElementById("one").addEventListener("click", inputOne);
document.getElementById("two").addEventListener("click", inputTwo);
document.getElementById("three").addEventListener("click", inputThree);
document.getElementById("subtract").addEventListener("click", subtractFunc);
document.getElementById("depositCash").addEventListener("click", depositCash);
document.getElementById("zero").addEventListener("click", inputZero);
document.getElementById("doubleZero").addEventListener("click", inputDblZero);
document.getElementById("decimal").addEventListener("click", inputDecimal);
document.getElementById("addition").addEventListener("click", addFunc);

//Number input functions
function inputSeven() {
  Calculator.memoFunc(7);
  document.getElementById("display").innerHTML = Calculator.recallMemory();
}

function inputEight () {
  document.getElementById("display").innerHTML = Calculator.recallMemory();
}

function inputNine() {
  document.getElementById("display").innerHTML = Calculator.recallMemory();
}

function inputFour() {
  document.getElementById("display").innerHTML = Calculator.recallMemory();
}

function inputFive() {
  document.getElementById("display").innerHTML = Calculator.recallMemory();
}

function inputSix() {
  document.getElementById("display").innerHTML = Calculator.recallMemory();
}

function inputOne() {
  document.getElementById("display").innerHTML = Calculator.recallMemory();
}

function inputTwo() {
  document.getElementById("display").innerHTML = Calculator.recallMemory();
}

function inputThree() {
  document.getElementById("display").innerHTML = Calculator.recallMemory();
}

function inputZero() {
  document.getElementById("display").innerHTML = Calculator.recallMemory();
}

function inputDblZero() {
  document.getElementById("display").innerHTML = Calculator.recallMemory();
}

//Operation functions

function divideFunc() {
  document.getElementById("display").innerHTML = Calculator.recallMemory();
}

function clearMemory() {
  document.getElementById("display").innerHTML = Calculator.recallMemory();
}

function multiplyFunc() {
  document.getElementById("display").innerHTML = Calculator.recallMemory();
}

function getTotal() {
  document.getElementById("display").innerHTML = Calculator.recallMemory();
}

function subtractFunc() {
  document.getElementById("display").innerHTML = Calculator.recallMemory();
}

function depositCash() {
  document.getElementById("display").innerHTML = Calculator.recallMemory();
}