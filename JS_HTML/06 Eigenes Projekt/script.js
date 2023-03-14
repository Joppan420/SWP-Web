const myHeaders = new Headers();
myHeaders.append("apikey", "JA0TPvK0R9mcGCPnG8HXSt9sXdzZHzii");

const signs = {
  ["JPY"]: "¥",
  ["USD"]: "$",
  ["RSD"]: "Din.",
  ["TRY"]: "₺"
}

function convert(convertData) {
  const input = parseFloat(document.getElementById("number1").value);

  fetch(
    `https://api.apilayer.com/exchangerates_data/convert?to=${convertData.id}&from=EUR&amount=${input}`,
    {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    }
    )
    .then((response) => response.json())
    .then(({ result }) => {
      console.log(result)
      document.getElementById(
        "output"
      ).innerHTML = `The converted amount was ${result} ${signs[convertData.id]}`;
    })
    .catch((error) => console.log("error", error));
}
