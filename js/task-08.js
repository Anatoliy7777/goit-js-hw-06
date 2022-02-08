const formSub = document.querySelector('.login-form');
const formPass = document.querySelector("[name='password']");
const formEmail = document.querySelector("[name='email']");

formSub.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  if (formPass === '') {
    alert('Все поля должны быть заполнены!');
  } else if (formEmail === '') {
    alert('Все поля должны быть заполнены!');
  }
}
