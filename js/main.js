import {checkStringLength, generatePost} from './util.js';
import {str, MAX_STRING_LENGTH } from './data.js';
import {renderPhotos} from './render.js';

checkStringLength(str, MAX_STRING_LENGTH);

//generatePost();

const photos = generatePost();
renderPhotos(photos);
//Задание 7 часть 2
