function oddLengths(arr) {
  return arr.reduce( (index, value) => {
    if (value.length % 2 != 0) {
      index.push(value.length);
    }
    return index;
  }, [])

}


let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]