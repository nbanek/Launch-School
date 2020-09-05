function catAge(number) {
  if (number === 0) {
    return 0;
  } else if (number === 1) {
    return 15;
  } else if (number === 2) {
    return 24;
  } else {
    return ((number - 2) * number) + 24
  }

}


catAge(0); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
console.log(catAge(4)); // 32