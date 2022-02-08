const inputControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputControlEl.addEventListener('input', InputController);

function InputController(event) {
  textEl.style.fontSize = event.target.value + 'px';
}
