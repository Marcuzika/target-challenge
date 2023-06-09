const data = require("./dados.json");

let largestBilling = 0;
let smallestBilling = 0;
let daysAboveAverage = 0;
let validDays = data.length;

const totalBilling = data.reduce((accumulator, currentValue) => {
  if (currentValue.valor === 0) {
    validDays -= 1;
  }
  return accumulator + currentValue.valor;
}, 0);

let average = totalBilling / validDays;

data.forEach((day) => {
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
