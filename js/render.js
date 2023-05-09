const similarListElement = document.querySelector('.pictures');
const similarPicture = document.querySelector('#picture').content.querySelector('.picture');
const similarPictInfo = similarPicture.querySelector('.picture__info');

export function renderPhotos(photos) {
  const similarListFragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const photoElement = renderPhoto(photo);
    similarListFragment.appendChild(photoElement);
  });

  similarListElement.appendChild(similarListFragment);
}

function renderPhoto(photo) {
  const pictElement = similarPicture.cloneNode(true);
  const pictInfo = similarPictInfo.cloneNode(true);
  pictElement.querySelector('.picture__img').src = photo.url;
  pictInfo.querySelector('.picture__likes').textContent = photo.likes;
  pictInfo.querySelector('.picture__comments').textContent = photo.comments;

  pictElement.appendChild(pictInfo);

  return pictElement;
}
