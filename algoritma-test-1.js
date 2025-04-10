function reverseAlphabetsOnly(str) {
  const letters = str.match(/[A-Za-z]/g) || [];
  const reversedLetters = letters.reverse();

  let result = '';
  let letterIndex = 0;

  for (let char of str) {
    if (/[A-Za-z]/.test(char)) {
      result += reversedLetters[letterIndex++];
    } else {
      result += char;
    }
  }

  return result;
}

const input = "NEGIE1";
const output = reverseAlphabetsOnly(input);
console.log(output); 
