import throttle from 'lodash.throttle';

const formInput = document.querySelector('.feedback-form');
console.dir(formInput);

function checkLocalStorage() {
  const userdata = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(userdata);
  if (userdata !== null) {
    console.log('we have data');

    for (const key in userdata) {
      formInput.elements[key].value = userdata[key];
      console.log(userdata[key]);
      console.log(key);
      console.log(formInput.elements[key]);
    }
  } else {
    console.log('local storage is empty');
  }
}
checkLocalStorage();

const clientData = {};
const inputTextTrottle = throttle(inputText, 500);
formInput.addEventListener('input', inputTextTrottle);

function inputText(event) {
  clientData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(clientData));
}
// console.log(clientData);

formInput.addEventListener('submit', clickOnSubmit);
function clickOnSubmit(evt) {
  evt.preventDefault();
  console.log(clientData);
  evt.target.reset();
  localStorage.removeItem('feedback-form-state');
}
// console.log(clientData);
