function halvsies(array) {
  let length = array.length;
  let firstHalf = array.splice(0, Math.ceil(array.length / 2));
  let secondHalf = array.splice(0, length);

  return console.log([firstHalf, secondHalf]);

}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]