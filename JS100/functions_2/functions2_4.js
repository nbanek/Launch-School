function calculateBMI(height, weight) {
  return (weight / (height/100)**2).toFixed(2);
}

console.log(calculateBMI(180, 80));