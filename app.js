BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json";

const dropdowns = document.querySelectorAll(".dropdown select");

for (select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.value = currCode;
    newOption.innerText = currCode;
    select.append(newOption);
  }
}
