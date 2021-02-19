module.exports = reverse;

function reverse(sentence) {
  const wordArray = sentence.split(" ");
  return wordArray.reverse().join(" ");
}
