function extractRegion (string) {
  return string.split('.')[0].split('_')[1];
}

function extractLanguage(string) {
  return string.split('_')[0];
}


function localGreet(languageCode) {
  let region = extractRegion(languageCode);
  let language = extractLanguage(languageCode);

  switch (region) {
    case 'US':
      return 'Hey!';
    case 'GB':
      return 'Hello!';
    case 'AU':
      return 'Howdy';
      }
  }


console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'