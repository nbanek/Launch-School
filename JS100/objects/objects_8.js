let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let arr = [];

arr = Object.entries(person);


console.log(arr);
// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]