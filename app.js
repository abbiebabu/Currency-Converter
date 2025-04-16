BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json";

// const dropdowns = document.querySelectorAll(".dropdown select");

// for (select of dropdowns) {
//   for (currCode in countryList) {
//     let newOption = document.createElement("option");
//     newOption.value = currCode;
//     newOption.innerText = currCode;
//     select.append(newOption);
//   }
// }

const dropdowns = document.querySelectorAll(".dropdown select");

for (select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.value = currCode;
    newOption.innerText = currCode;
    if (select.name == "from" && currCode == "USD") {
      newOption.selected = "selected";
    } else select.name == "to" && currCode == "NPR";
    select.append(newOption);
  }
  select.addEventListener("change", (event) => {
    updateFlag(event.target);
  });
}

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};
