const states = [
  {
    name: "SP",
    valor: 67836.43,
  },
  {
    name: "RJ",
    valor: 36678.66,
  },
  {
    name: "MG",
    valor: 29229.88,
  },
  {
    name: "ES",
    valor: 27165.48,
  },
  {
    name: "Others States",
    valor: 19849.53,
  },
];

let total = 0;

states.map((state) => (total += state.valor));
states.map((state) => {
  let percentage = (state.valor * 100) / total;
  percentage = percentage.toFixed(2).replace(".", ",");
  console.log(`Percentage of ${state.name} = ${percentage}%`);
});
