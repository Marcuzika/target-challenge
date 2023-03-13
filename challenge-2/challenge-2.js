const Fibonacci = (number) => {
  let term_1 = 0;
  let term_2 = 1;
  let term_3 = 0;

  if (0 <= number && number < 2) {
    return console.log("The entered number is part of the Fibonacci sequence!");
  }

  while (number >= term_3) {
    term_3 = term_1 + term_2;
    term_1 = term_2;
    term_2 = term_3;

    if (number === term_3) {
      return console.log(
        "The entered number is part of the Fibonacci sequence!"
      );
    }
  }

  return console.log(
    "The number entered is not part of the Fibonacci sequence!"
  );
};

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter a number: ", (inputedNumber) => {
  Fibonacci(inputedNumber);
  readline.close();
});
