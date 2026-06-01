const findTheOldest = function (age) {
  return age.sort((a, b) => {
    const currentYear = new Date().getFullYear();
    const lastGuy = (a.yearOfDeath || currentYear) - a.yearOfBirth;
    const newGuy = (b.yearOfDeath || currentYear) - b.yearOfBirth;
    return lastGuy > newGuy ? -1 : 1;
  })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
