let rlSync = require('readline-sync');
let age = Number(rlSync.question("How old are you?"));

for (let years = 10; years <= 40; years += 10) {
  console.log(`In ${years} years, you will be ${years + age} years old.`);
}

