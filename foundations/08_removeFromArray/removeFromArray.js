const removeFromArray = function(arr,...value) {
  return arr.filter((element) => !value.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
