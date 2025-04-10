function longest(sentence) {
  const words = sentence.split(" ");
  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return `${longestWord}: ${longestWord.length} character`;
}

const sentence = "Halo Halo Bandung Ibu Kota";
console.log(longest(sentence)); 
