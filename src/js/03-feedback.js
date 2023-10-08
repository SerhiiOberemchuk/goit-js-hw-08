import throttle from 'lodash.throttle';

const formInput = document.querySelector('.feedback-form');

let clientData = {};
const inputTextTrottle = throttle(inputText, 500);
formInput.addEventListener('input', inputTextTrottle);

function inputText(event) {
  clientData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(clientData));
}

function checkLocalStorage() {
  const userdata = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (userdata !== null) {
    clientData = userdata;
    for (const key in userdata) {
      formInput.elements[key].value = userdata[key];
    }
  }
}
checkLocalStorage();

formInput.addEventListener('submit', clickOnSubmit);
function clickOnSubmit(evt) {
  evt.preventDefault();
  if (evt.target.email.value === '' && evt.target.message.value === '') {
    return alert('Please fill in all the fields!');
  }
  console.log(clientData);
  evt.target.reset();
  localStorage.removeItem('feedback-form-state');
}
