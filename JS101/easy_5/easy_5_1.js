function dms(degreesFloat) {
  let degrees = Math.floor(degreesFloat);
  let minutes = Math.floor((degreesFloat - degrees) * 60);
  let seconds = Math.floor(((degreesFloat - degrees) * 60 - minutes) * 60);

  return console.log(`${degrees}°${minutes}'${seconds}"`);
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"