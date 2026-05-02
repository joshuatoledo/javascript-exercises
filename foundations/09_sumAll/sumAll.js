const sumAll = function(start,end) {
  let arr = [];
  for(let i = start; i <= end; i++){
      arr.push(i);
  }
  return arr.reduce((acc, curr) => acc + curr ,0);
};


// Do not edit below this line
module.exports = sumAll;
