let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

let obj = {};

nestedArray.forEach( item => {
  obj[item[0]] = item[1];
})

console.log(obj);