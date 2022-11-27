const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  const getZero = (number) => {
    if (number <= 9 && number >= 0) {
      return `0${number}`;
    } else {
      return number;
    }
  };

  return (seconds) => {
    const timer = setInterval(() => {
      const sec = seconds % 60,
        minutes = Math.floor(seconds / 60) % 60,
        hours = Math.floor(seconds / 3600);

      if (seconds <= 0) {
        clearInterval(timer);
        alert('Время закончилось');
      } else {
        timerEl.innerText = `${getZero(hours)}:${getZero(minutes)}:${getZero(sec)}`;
      }
      seconds--;
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (event) => {
  event.preventDefault();
  event.target.value = event.target.value.replace(/[^\d]/g, '');
  // Очистите input так, чтобы в значении
  // оставались только числа
});

buttonEl.addEventListener('click', (event) => {
  buttonEl.disabled = true;
  const seconds = Number(inputEl.value);
  animateTimer(seconds);

  inputEl.value = '';
});
