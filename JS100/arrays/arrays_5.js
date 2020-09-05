let scores = [96, 47, 113, 89, 100, 102];
let count = 0;

scores.forEach( item => {
  if (item > 100) {
    count += 1
  }
})

console.log(count);