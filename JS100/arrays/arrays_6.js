let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

vocabulary.forEach( item => {
  item.forEach( subItem => {
    console.log(subItem);
  })
})


// Expected output:
// happy
// cheerful
// merry
// etc...