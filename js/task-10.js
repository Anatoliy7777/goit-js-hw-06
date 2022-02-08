const renderBtnref = document.querySelector('[data-action="render"]');
const destroyBtnRef = document.querySelector('[data-action="destroy"]');
const amountBoxRef = document.querySelector('#controls > input');

function render() {
  let currentBoxWidth = 30;
  const arrNewBox = [];
  for (let i = 0; i < amountBoxRef.valueAsNumber; i += 1) {
    const newBox = document.createElement('div');
    newBox.setAttribute('id', `box-${i + 1}`);
    newBox.style.backgroundColor = generateColorRGB();
    newBox.style.width = `${currentBoxWidth}px`;
    newBox.style.height = `${currentBoxWidth}px`;

    arrNewBox.push(newBox);
    currentBoxWidth += 10;
  }
  document.querySelector('#boxes').append(...arrNewBox);
}

function destroy() {
  const boxesRef = document.querySelector('#boxes');
  boxesRef.innerHTML = '';
}

function generateColorRGB() {
  return `rgb(${Math.round(Math.random() * 255)},
            ${Math.round(Math.random() * 255)},
            ${Math.round(Math.random() * 255)})`;
}

renderBtnref.addEventListener('click', render);

destroyBtnRef.addEventListener('click', destroy);
