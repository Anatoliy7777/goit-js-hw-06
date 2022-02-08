const decrementEl = document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');

const counterValue = document.querySelector('#value');

decrementEl.addEventListener('click', decrementValue);
incrementEl.addEventListener('click', incrementVaule);

function decrementValue() {
  counterValue.textContent = Number(counterValue.textContent) - 1;
}
function incrementVaule() {
  counterValue.textContent = Number(counterValue.textContent) + 1;
}
