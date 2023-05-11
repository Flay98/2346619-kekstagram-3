import { sendData } from './server.js';

const body = document.querySelector('body');
const form = document.getElementById('upload-select-image');
const cancelButton = document.querySelector('.img-upload__cancel');
const submitButton = document.getElementById('upload-submit');
const imgUploadForm = document.querySelector('.img-upload__overlay');
const imgInput = document.querySelector('.img-upload__input');

const succesPattern = body.querySelector('#success').content.querySelector('.success');
const errorPattern = body.querySelector('#error').content.querySelector('.error');

function escKeyHandler(evt) {
  if (evt.key === 'Escape') {
    form.reset();
    cancelImgUpload();
  }
}

function cancelImgUpload() {
  imgUploadForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', escKeyHandler);
}

function openImgUpload() {
  imgUploadForm.classList.toggle('hidden');
  document.body.classList.toggle('modal-open');
  document.addEventListener('keydown', escKeyHandler);
}

imgInput.addEventListener('change', openImgUpload);
cancelButton.addEventListener('click', cancelImgUpload);

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper__item--invalid',
  successClass: 'img-upload__field-wrapper__item--valid',
  errorTextParent: 'img-upload__field-wrapper',
});

function getSuccessMessage() {
  cancelImgUpload();
  form.reset();
  const successMessage = succesPattern.cloneNode(true);
  body.appendChild(successMessage);
  const successButton = successMessage.querySelector('.success__button');

  function closeMessage(){
    successMessage.remove();
    document.removeEventListener('keydown', handleKeyDownEvent);
  }

  function handleKeyDownEvent(evt) {
    if (evt.key === 'Escape') {
      closeMessage();
    }
  }

  successButton.addEventListener('click', () => {
    closeMessage();
  });
  successMessage.addEventListener('click', (evt) => {
    if (evt.target.matches('.success')) {
      closeMessage();
    }
  });
  document.addEventListener('keydown', handleKeyDownEvent);
}

function getErrorMessage() {
  const errorMessage = errorPattern.cloneNode(true);
  body.appendChild(errorMessage);
  const errorButton = errorMessage.querySelector('.error__button');

  function closeMessage(){
    errorMessage.remove();
    document.removeEventListener('keydown', handleKeyDownEvent);
  }

  function handleKeyDownEvent(evt) {
    if (evt.key === 'Escape') {
      closeMessage();
    }
  }

  errorButton.addEventListener('click', () => {
    closeMessage();
  });
  errorMessage.addEventListener('click', (evt) => {
    if (evt.target.matches('.error')) {
      closeMessage();
    }
  });
  document.addEventListener('keydown', handleKeyDownEvent);
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    submitButton.setAttribute('disabled', '');
    sendData(
      new FormData(evt.target),
      getSuccessMessage,
      getErrorMessage,
      () => {
        cancelImgUpload();
        submitButton.removeAttribute('disabled', '');
      }
    );
  }
});
