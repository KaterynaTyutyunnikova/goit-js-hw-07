


const input = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

input.addEventListener('input', (event) => {
  const trimmedValue = event.target.value.trim();
  nameOutput.textContent = trimmedValue || 'Anonymous';
});
