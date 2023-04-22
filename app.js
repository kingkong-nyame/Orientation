const form = document.querySelector('form');
const inputs = document.querySelectorAll('.input');

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add('focus');
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == '') {
    parent.classList.remove('focus');
  }
}

inputs.forEach((input) => {
  input.addEventListener('focus', focusFunc);
  input.addEventListener('blur', blurFunc);
});

function submitForm(event) {
  event.preventDefault();
  alert('Form submitted!');
  form.reset(); // reset the form
}

form.addEventListener('submit', submitForm);
