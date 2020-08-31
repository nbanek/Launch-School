//one could simply use array.includes(), but to actually code something:

function checkThree(arr) {
  let arr2 = arr.filter(element => { 
    return element == 3;
  });
  return (arr2.length > 0);
}


let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

console.log(checkThree(numbers1));
console.log(checkThree(numbers2));
console.log(checkThree(numbers3));