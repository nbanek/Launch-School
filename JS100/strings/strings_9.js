let string = 'launch school tech & talk';
let words = string.split(' ');
let capitalizedWords = [];

for (let i = 0; i < words.length; i++) {
  capitalizedWords.push(words[i][0].toUpperCase() + words[i].slice(1));
}

capitalizedWords.join(' ');
console.log(capitalizedWords);

