const sumAll = function(start,end) {
    
    if(start < 0 || end < 0){
        return 'ERROR';
    }

     if (!Number.isInteger(start) || !Number.isInteger(end)){
        return 'ERROR';    
     }
     
  const min = Math.min(start, end);
  const max = Math.max(start, end);
  
  let arr = [];
  for(let i = min; i <= max; i++){
      arr.push(i);
  }
  return arr.reduce((acc, curr) => acc + curr ,0);
};


// Do not edit below this line
module.exports = sumAll;
