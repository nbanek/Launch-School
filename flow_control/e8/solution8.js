function isInclusive(num) {
  if (num < 0){
    console.log(`${num} is less than 0`);
  } else if (num >= 0 && num <= 50) {
    console.log(`${num} is between 0 and 50`);
  } else if (num >= 51 && num <= 100) {
    console.log(`${num} is between 51 and 100`);
  } else if (num > 100){
    console.log(`${num} is greater than 100`);
  }
}

isInclusive(-1);
isInclusive(0);
isInclusive(25);
isInclusive(50);
isInclusive(51);
isInclusive(101);