const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', validationInputEvent);

function validationInputEvent(event) {
  if (event.target.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
    return;
  }

  inputEl.classList.add('invalid');
  inputEl.classList.remove('valid');
}
