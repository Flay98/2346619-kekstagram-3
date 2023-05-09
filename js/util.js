function getRandomInt(min, max) {

  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function checkStringLength(strToCheck, maxLength) {
  return strToCheck <= maxLength;
}

const LikesCount = {
  MIN: 15,
  MAX: 200
};

const CommentsCount = {
  MIN: 0,
  MAX: 200
};

function generatePost() {
  const objects = [];
  for (let i = 1; i < 26; i++) {
    const someObject = {id: i,
      url: `photos/${i}.jpg`,
      description: `Фото номер ${i}`,
      likes: getRandomInt(LikesCount.MIN, LikesCount.MAX),
      comments: getRandomInt(CommentsCount.MIN, CommentsCount.MAX)
    };
    objects.push(someObject);
  }
  return objects;
}

export {generatePost, checkStringLength};
