let speedLimit = 60;
let currentSpeed = 80;

if (currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5) {
  console.log('"People are so bad at driving cars ' +
    'that computers don\'t have to be that good to be much better." ' +
    '-- Marc Andreessen');
}


//there is an error because there are not enough parenthesis to properly evaluate the expression
// if ((currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5)) {