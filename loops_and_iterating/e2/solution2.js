function factorial(num) {
  let total = 1;
  for (let i = num; i > 0; i -= 1) {
    total *= i;
  }
  return total;
}

console.log(factorial(8));