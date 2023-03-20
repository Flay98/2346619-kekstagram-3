function getRandomInt(min, max) {

  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function checkStringLength(str, maxLength) {
  return str <= maxLength;
}

let objects = [];

for (let i = 1; i < 26; i++) {
  let someObject = {id: i,
    url: 'photos/' + i + '.jpg',
    description: 'Фото номер ' + i,
    likes: getRandomInt(15, 200),
    comments: getRandomInt(0, 200)
  };
  objects.push(someObject);
}

