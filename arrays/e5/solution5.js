function removeNonInteger(array) {
  return array.filter(value => {
    if (Number.isInteger(value)) {
      return value;
    }
    
  })
}

let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let newArray = removeNonInteger(array);
console.log(newArray); 