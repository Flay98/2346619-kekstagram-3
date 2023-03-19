function getRandomInt(min, max) {

  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function checkStringLength(str, maxLength) {
  if (str.length <= maxLength) {
    return true;
  } else return false;
}

