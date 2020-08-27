function evenOrOdd(num) {
  if(!Number.isInteger(num)) {
    console.log("Error: num is not an integer!");
    return;
  }
  if (num % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}
evenOrOdd(1.2);
evenOrOdd(1);
evenOrOdd(2);
evenOrOdd(3);
evenOrOdd(4);