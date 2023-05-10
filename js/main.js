import {checkStringLength, generatePost} from './util.js';
import {str, MAX_STRING_LENGTH } from './data.js';
import {renderPhotos} from './render.js';
import './photoEditor.js';
import './validation.js';

checkStringLength(str, MAX_STRING_LENGTH);

const photos = generatePost();
renderPhotos(photos);
