let dollarAvailable = false;
let dollarRate = 1;

function dollar() {
  if (!dollarAvailable){
    alert("no wechselkurs");
    return;
  }
  
  
  console.log("clicked");
  let num1 = document.getElementById("number1").value;
  let result = parseFloat(num1) * dollarRate;

  document.getElementById("output").innerHTML = result + " rate:" + dollarRate;
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
  let result = parseFloat(num1) * 117.3;

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
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};

fetch(
  "https://api.apilayer.com/exchangerates_data/convert?to=USD&from=EUR&amount=15",
  requestOptions
)
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    dollarRate = result.info.rate;
    dollarAvailable = true;
  })
  .catch((error) => console.log("error", error));
