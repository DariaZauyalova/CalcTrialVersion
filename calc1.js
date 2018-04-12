var buttonPlus = document.getElementById("buttonPlus");
var buttonMinus = document.getElementById("buttonMinus");
var buttonMultiply = document.getElementById("buttonMultiply");
var buttonDevide = document.getElementById("buttonDevide");
var buttonClear = document.getElementById("allButtonClear");

// object js
var actions = {
    onButtonPlusClick: onButtonPlusClick,
};

function calc(action) {
    var input1 = document.getElementById("number1");
    var input2 = document.getElementById("number2");

    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    var summ = actions[action](number1, number2);
    console.log(summ);

    var resultEl = document.getElementById("result");
    resultEl.value = summ;
}

function onButtonPlusClick(number1, number2) {
    // var input1 = document.getElementById("number1");
    // var input2 = document.getElementById("number2");

    // var number1 = Number(input1.value);
    // var number2 = Number(input2.value);

    // var summ = number1 + number2;


    // var resultEl = document.getElementById("result");

    // resultEl.value = summ;

    return number1 + number2;
}
function onButtonMinusClick() {
    resetOutputError();
    var input1 = document.getElementById("number1");
    var input2 = document.getElementById("number2");

    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    var minus = number1 - number2;

    var resultEl = document.getElementById("result");

    resultEl.value = minus;
}
function onButtonMultiplyClick() {
    resetOutputError();
    var input1 = document.getElementById("number1");
    var input2 = document.getElementById("number2");

    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    var multiply = number1 * number2;

    var resultEl = document.getElementById("result");

    resultEl.value = multiply;
}
function onButtonDevideClick() {
    var input1 = document.getElementById("number1");
    var input2 = document.getElementById("number2");

    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    var devide = number1 / number2;

    var resultEl = document.getElementById("result");


    if (number2 === 0) {
        resultEl.className = "error";
        resultEl.value = "Error";
    } else {
        resultEl.value = devide;
        resultEl.className = null;
    }
   
}
function onButtonClearClick() {
var allIsClear = document.getElementById("number1")
var allIsClear1 = document.getElementById("number2")
var allIsClear2 = document.getElementById("result")
allIsClear.value = null;
allIsClear1.value = null;
allIsClear2.value = null;
allIsClear2.className = null;
}

function resetOutputError() {
    document.getElementById("result").className = "";
}

//calc

buttonPlus.addEventListener("click", function() { calc('onButtonPlusClick')});
// buttonPlus.addEventListener("click", onButtonPlusClick);
buttonMinus.addEventListener("click", onButtonMinusClick);
buttonMultiply.addEventListener("click", onButtonMultiplyClick);
buttonDevide.addEventListener("click", onButtonDevideClick);
buttonClear.addEventListener("click", onButtonClearClick);

