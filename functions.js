function findAsciiValue(name) {
  let asciiValue = 0;
  for (let index = 0; index < name.length; index++) {
    asciiValue += name.charCodeAt(index);
  }
  return asciiValue;
}

function matchChecker(value) {
  if (value <= 100) {
    return 'Kecocokan: 95%';
  } else if (value <= 200) {
    return 'Kecocokan: 85%';
  } else if (value <= 300) {
    return 'Kecocokan: 75%';
  } else if (value <= 400) {
    return 'Kecocokan: 65%';
  } else if (value <= 500) {
    return 'Kecocokan: 55%';
  } else if (value <= 600) {
    return 'Kecocokan: 45%';
  } else if (value <= 700) {
    return 'Kecocokan: 35%';
  } else {
    return 'Kecocokan di bawa 35%';
  }
}

module.exports = { findAsciiValue, matchChecker };
