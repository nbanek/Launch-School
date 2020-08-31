function copyObj(obj, key) {
  let obj2 = {};
  if (key){
    key.forEach(key => {
      obj2[key] = obj[key];
    });
    return obj2;
  } else {
    return obj;
  }
}


let objToCopy = {
  foo: 1,
  bar: 2,
};

let newObj = copyObj(objToCopy);
console.log(newObj.foo);    // => 1
console.log(newObj.bar);    // => 2

let newObj2 = copyObj(objToCopy, [ 'foo' ]);
console.log(newObj2.foo);   // => 1
console.log(newObj2.bar);   // => undefined
