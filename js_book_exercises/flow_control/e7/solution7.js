function allCaps(string) {
  if (string.length >= 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}

console.log(allCaps('cat'));
console.log(allCaps('qwertyuiop'));
console.log(allCaps('AsdDfgCVFxx'));