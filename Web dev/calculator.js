const display = document.getElementById('display');
const keys = document.querySelectorAll('button');

keys.forEach(key => {
  key.addEventListener('click', () => {
    if (key.value === 'clear') {
      display.value = '';
    } else if (key.value === '=') {
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = 'Error';
      }
    } else {
      display.value += key.value;
    }
  });
});
