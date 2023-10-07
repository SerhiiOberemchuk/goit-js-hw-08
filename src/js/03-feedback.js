import throttle from 'lodash.throttle';

const formInput = document.querySelector('.feedback-form');
console.dir(formInput);

function checkLocalStorage(params) {
  localStorage.getItem();
}

const feedback_form = {};
const inputTextTrottle = throttle(inputText, 500);
formInput.addEventListener('input', inputTextTrottle);

function inputText(event) {
  feedback_form[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(feedback_form));
  // console.dir(event.target.name);
}
console.log(feedback_form);

formInput.addEventListener('submit', clickOnSubmit);
function clickOnSubmit(evt) {
  evt.preventDefault();
  console.log(feedback_form);
  evt.target.reset();
  localStorage.removeItem('feedback-form-state');
}
console.log(feedback_form);
