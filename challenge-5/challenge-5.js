const reverseWord = (word) => {
  let reversedWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }
  return console.log(`Your word reversed: ${reversedWord}`);
};

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter a word: ", (inputedWord) => {
  reverseWord(inputedWord);
  readline.close();
});
