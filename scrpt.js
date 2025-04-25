let lightModeBtn = document.getElementById('lightModeBtn');
let darkModeBtn = document.getElementById('darkModeBtn');

lightModeBtn.addEventListener('click', () => {
  document.body.classList.remove('dark-mode');
});

darkModeBtn.addEventListener('click', () => {
  document.body.classList.add('dark-mode');
});