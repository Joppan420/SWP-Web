function dollar() {
    console.log("clicked");
    let num1 = document.getElementById("number1").value;
    let result = parseFloat(num1) * 1.06;

    document.getElementById("output").innerHTML = result;
}

function yen() {
    console.log("clicked");
    let num1 = document.getElementById("number1").value; 
    let result = parseFloat(num1) * 145.16;

    document.getElementById("output").innerHTML = result;
}

function dinar() {
    console.log("clicked");
    let num1 = document.getElementById("number1").value;
    let result = parseFloat(num1) * 117.30;

    document.getElementById("output").innerHTML = result;
}

function lira() {
    console.log("clicked");
    let num1 = document.getElementById("number1").value;
    let result = parseFloat(num1) * 20.05;

    document.getElementById("output").innerHTML = result;
}



var myHeaders = new Headers();
myHeaders.append("apikey", "JA0TPvK0R9mcGCPnG8HXSt9sXdzZHzii");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/exchangerates_data/convert?to=USD&from=EUR&amount=15", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
