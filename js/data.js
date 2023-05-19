const GET = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const POST = 'https://27.javascript.pages.academy/kekstagram-simple';

const MIN_HASHTAG_LENGTH = 2;
const MAX_HASHTAG_LENGTH = 20;
const HASHTAG_REGEX = new RegExp('^#[а-яa-zA-ZА-ЯёЁ0-9]{1,19}$');

const MAX_COMMENT_LENGTH = 140;
const MIN_COMMENT_LENGTH = 20;

const MIN_SCALE_VALUE = 25;
const MAX_SCALE_VALUE = 100;

function checkLength(str, maxLength) {
  return str.length <= maxLength;
}

export {GET, POST, MAX_HASHTAG_LENGTH, MIN_HASHTAG_LENGTH, HASHTAG_REGEX,
  checkLength, MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH, MAX_SCALE_VALUE, MIN_SCALE_VALUE};
