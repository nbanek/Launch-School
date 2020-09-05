let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];


function contains(string, array) {
  return array.indexOf(string) >= 0;
}


console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false