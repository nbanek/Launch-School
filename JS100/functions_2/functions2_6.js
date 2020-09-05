function removeLastChar(string) {
  return string.slice(0, string.length - 1)
}


console.log(removeLastChar('ciao!')); // 'ciao'
removeLastChar('hello'); // 'hell'