const data = require("./dados.json");

let largestBilling = 0;
let smallestBilling = 0;
let daysAboveAverage = 0;
let totalBilling = 0;
let validDays = data.length;

data.map((day) => {
  if (day.valor === 0) {
    validDays -= 1;
  }
  totalBilling += day.valor;
});

let average = totalBilling / validDays;

data.map((day) => {
  if (day.valor > largestBilling) {
    largestBilling = day.valor;
  }
  if (smallestBilling === 0) {
    smallestBilling = day.valor;
  }
  if (day.valor < smallestBilling && day.valor !== 0) {
    smallestBilling = day.valor;
  }
  if (day.valor > average) {
    daysAboveAverage += 1;
  }
});

largestBilling = largestBilling.toLocaleString("pt-BR", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});
smallestBilling = smallestBilling.toLocaleString("pt-BR", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

console.log(`The largest billing amount was: R$ ${largestBilling}
The smallest billing amount was: R$ ${smallestBilling}
The number of days on which billing was greater than the monthly average was: ${daysAboveAverage}`);
