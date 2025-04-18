const BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json";
const btn = document.querySelector(".button");
const convert = document.querySelector(".msg");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");

// const dropdowns = document.querySelectorAll(".dropdown select");

// for (select of dropdowns) {
//   for (currCode in countryList) {
//     let newOption = document.createElement("option");
//     newOption.value = currCode;
//     newOption.innerText = currCode;
//     if (select.name == "from" && currCode == "USD") {
//       newOption.selected = "selected";
//     } else select.name == "to" && currCode == "NPR";
//     select.append(newOption);
//   }
//   select.addEventListener("change", (event) => {
//     updateFlag(event.target);
//   });
// }

// const updateFlag = (element) => {
//   let currCode = element.value;
//   let countryCode = countryList[currCode];
//   let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
//   let img = element.parentElement.querySelector("img");
//   img.src = newSrc;
// };

const dropdowns = document.querySelectorAll(".dropdown select ");
for (select of dropdowns) {
  for (currCode in countryList) {
    newOption = document.createElement("option");
    newOption.value = currCode;
    newOption.innerText = currCode;
    select.append(newOption);
    if (select.name == "from" && currCode == "USD") {
      newOption.selected = "selected";
    } else if (select.name == "to" && currCode == "NPR") {
      newOption.selected = "selected";
    }
  }
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let img = element.parentElement.querySelector("img");
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;

  img.src = newSrc;
};

// btn.addEventListener("click", async (event) => {
//   event.preventDefault();
//   let amount = document.querySelector(".amount input");
//   let amountVal = amount.value;
//   amountVal = Number(amountVal);

//   if (amountVal == "" || amountVal <= 1) {
//     amountVal = 1;
//     amount.value = "1";
//   }
//   console.log(fromCurr.value, toCurr.value);

//   const URL = `${BASE_URL}.${fromCurr.value.toLowerCase()}.${toCurr.value.toLowerCase()}.json`;
//   let response = await fetch(URL);
//   console.log(response);
// });
btn.addEventListener("click", async (event) => {
  event.preventDefault();
  let amount = document.querySelector(".amount input");
  let amountVal = Number(amount.value);

  if (!amountVal || amountVal <= 1) {
    amountVal = 1;
    amount.value = "1";
  }

  const from = fromCurr.value.toLowerCase();
  const to = toCurr.value.toLowerCase();
  const URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`;
  const response = await fetch(URL);
  const data = await response.json();
  const rate = data[from][to];
  convertedAmount = (amountVal * rate).toFixed(2);
  convert.innerText = `${amountVal} ${from.toUpperCase()} = ${convertedAmount} ${to.toUpperCase()}`;
});
