import {HASHTAG_REGEX, MIN_HASHTAG_LENGTH, MAX_HASHTAG_LENGTH, checkLength, MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH} from './data.js';

const hashtag = document.querySelector('.text__hashtags');

function validateComment (value) {
  return value.length >= MIN_COMMENT_LENGTH && value.length <= MAX_COMMENT_LENGTH;
}

function validateHashTag (value) {
  return HASHTAG_REGEX.test(value) && !checkLength(value, MIN_HASHTAG_LENGTH) && checkLength(value, MAX_HASHTAG_LENGTH);
}

function checkForm(form) {
  const pristine = new Pristine(form, {
    classTo: 'img-upload__field-wrapper',
    errorClass: 'img-upload__field-wrapper__item--invalid',
    successClass: 'img-upload__field-wrapper__item--valid',
    errorTextParent: 'img-upload__field-wrapper',
  });
  pristine.addValidator(
    form.querySelector('.text__description'),
    validateComment,
    'От 20 до 140 символов'
  );

  const pristineHashTag  = new Pristine (form, {
    classTo: 'img-upload__text',
    errorClass: 'form--invalid',
    successClass: 'form--valid',
    errorTextParent: 'img-upload__text',
    errorTextTag: 'span',
    errorTextClass: 'form__error'
  });

  pristineHashTag.addValidator(
    hashtag,
    validateHashTag,
    'Формат хэштега: #anySymbols([3..20])'
  );

  return (pristine.validate() && pristineHashTag.validate());
}

export {checkForm};
