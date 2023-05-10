const imagePreload = document.querySelector('.img-upload__preview');
const filters = {
  'chrome': {
    min: 0,
    max: 100,
    name: 'grayscale',
    step: 0.1,
    measure: '%'
  },
  'sepia' : {
    min: 0,
    max: 100,
    name: 'sepia',
    step: 1,
    measure: '%'
  },
  'marvin': {
    min: 0,
    max: 100,
    name: 'invert',
    step: 1,
    measure: '%'
  },
  'phobos': {
    min: 0,
    max: 3,
    name: 'blur',
    step: 0.03,
    measure: 'px'
  },
  'heat': {
    min: 1,
    max: 3,
    name: 'brightness',
    step: 0.03,
    measure: ''
  }
};

const scale = document.querySelector('.scale__control--value');
let scaleValue = Number(scale.value.replace('%', ''));

document.querySelector('.scale__control--bigger').addEventListener('click', upScale);
document.querySelector('.scale__control--smaller').addEventListener('click', lowerScale);

function upScale() {
  if (scaleValue !== 100) {
    scaleValue += 25;
    scale.value = `${scaleValue}%`;
    imagePreload.style.transform = `scale(${scaleValue/100})`;
  }
}

function lowerScale() {
  if (scaleValue !== 25) {
    scaleValue -= 25;
    scale.value = `${scaleValue}%`;
    imagePreload.style.transform = `scale(${scaleValue/100})`;
  }
}

const sliderElement = document.querySelector('.effect-level__slider');
const sliderElementValue = document.querySelector('.effect-level__value');

noUiSlider.create(sliderElement, {
  start: 0,
  range: {
    min: 0,
    max: 100,
  },
  step: 1,
  connect: true,
});

sliderElement.hidden = true;

let currentEffect = 'none';
let sliderValue;

function setEffect(effect, flag) {
  const image = imagePreload.querySelector('img');
  if (effect === 'none') {
    sliderElement.setAttribute('hidden', true);
    image.className = '';
    image.style.filter = '';
    return;
  }

  const min = filters[effect].min;
  const max = filters[effect].max;
  const step = filters[effect].step;
  const measure = filters[effect].measure;
  const name = filters[effect].name;

  if (!flag) {
    image.style.filter = `${name}(${max}${measure})`;
    sliderElement.noUiSlider.updateOptions({
      range: {
        min,
        max,
      },
      step,
      start: max,
    });

    sliderElement.removeAttribute('hidden', false);
    image.className = '';
    image.classList.add(`effects__preview--${effect}`);
    currentEffect = effect;
  } else {
    image.style.filter = `${name}(${sliderValue}${measure})`;
  }
}

sliderElement.noUiSlider.on('slide', () => {
  sliderElementValue.value = sliderElement.noUiSlider.get();
  sliderValue = sliderElement.noUiSlider.get();
  setEffect(currentEffect, true);
});

for (const smallPicture of document.querySelectorAll('.effects__radio')) {
  smallPicture.addEventListener('click', () => {
    setEffect(smallPicture.value);
  });
}
