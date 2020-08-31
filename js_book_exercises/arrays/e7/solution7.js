function sumOfSquares(numbers) {
  let sum = numbers.reduce( (accumulator, number) => accumulator + number * number, 0);
  return sum;
}


let numbers = [3, 5, 7];
console.log(sumOfSquares(numbers)); // => 83