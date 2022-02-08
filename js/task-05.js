const inputEl = document.querySelector('#name-input');
const nameLabelEl = document.querySelector('#name-output');

inputEl.addEventListener('input', handleInput);

function handleInput(event) {
  nameLabelEl.textContent =
    event.target.value === '' ? nameLabelEl.textContent : event.target.value;
}
