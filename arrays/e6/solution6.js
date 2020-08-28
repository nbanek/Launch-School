function oddLengths(arr) {
  let filteredArray = arr.filter(item => {
    if (item.length % 2 != 0) {
      return item;
    }
  })
  return filteredArray.map(item => item.length);
  
}


let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]