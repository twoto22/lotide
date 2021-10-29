
function countLetters(str) {
  var First = str.split(" ").join("");
  charCount = {};

  for (var i= 0; i < First.length; i++) {
    if (charCount[First[i]]) {
      charCount[First[i]] += 1;
    } else {
      charCount[First[i]] = 1;
      }

  }
      console.log(charCount);
}

countLetters("lighthouse in the house");
