const { findAsciiValue, matchChecker } = require('./functions');

function loveTester(name1, name2) {
  const valueName1 = findAsciiValue(name1);
  const valueName2 = findAsciiValue(name2);
  let valueDeviation = valueName1 - valueName2;
  if (valueName1 === valueName2) {
    return 'Masukkan nama yang berbeda!';
  }
  if (valueDeviation < 0) {
    valueDeviation *= -1;
  }
  return matchChecker(valueDeviation);
}

module.exports = loveTester;
