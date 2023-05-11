const GET = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const POST = 'https://27.javascript.pages.academy/kekstagram-simple';

function getData(showSuccess) {
  return fetch(GET).then((response) => response.json()).then((data) => {
    showSuccess(data);
  });
}

function sendData(body, showSuccess, showError, getFinal = () => {}) {
  return fetch(POST, {
    method: 'POST',
    body,
  }).then((response) => {
    if (response.ok) {
      showSuccess();
    } else {
      showError();
    }
  }).finally(() => getFinal());
}

export {getData, sendData};
