import { getData } from './server.js';

const similarPicture = document.querySelector('#picture');
const similarListElement = document.querySelector('.pictures');

function renderPhotos(photos) {
  const partOfPicturesList = document.createDocumentFragment();
  photos.forEach(({url, likes, comments}) => {
    const picture = similarPicture.content.cloneNode(true);
    picture.querySelector('.picture__img').src = url;
    picture.querySelector('.picture__comments').textContent = comments;
    picture.querySelector('.picture__likes').textContent = likes;
    partOfPicturesList.appendChild(picture);
  });

  similarListElement.append(partOfPicturesList);
}

getData(renderPhotos);
