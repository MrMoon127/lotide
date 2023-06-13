const letterPositions = function(sentence) {
  const results = {};
  let i = 0;

  for (const letter of sentence) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
    i++;
  }

  return results;
}



module.exports = letterPositions;