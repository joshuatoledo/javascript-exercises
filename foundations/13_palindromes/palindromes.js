const palindromes = function (palindromes) {
  const word = palindromes.toLowerCase().replace(/[^a-z0-9]/gi, "");
  const reverseWord = word.split("").reverse().join("");

  if (word === reverseWord) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
