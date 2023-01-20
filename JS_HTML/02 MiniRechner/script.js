function addNumbers() {
    console.log("clicked");
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
    let result = parseFloat(num1) + parseFloat(num2);

    document.getElementById("output").innerHTML = result;
}

function subtractNumbers() {
    console.log("clicked");
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
    let result = parseFloat(num1) - parseFloat(num2);

    document.getElementById("output").innerHTML = result;
}

function multiplyNumbers() {
    console.log("clicked");
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
    let result = parseFloat(num1) * parseFloat(num2);

    document.getElementById("output").innerHTML = result;
}

function divideNumbers() {
    console.log("clicked");
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
    let result = parseFloat(num1) / parseFloat(num2);

    document.getElementById("output").innerHTML = result;
}