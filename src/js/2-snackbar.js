import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();

  const delayInput = document.getElementById('delayInput');
  const stateInput = document.querySelector('input[name="state"]:checked');

  const delay = parseInt(delayInput.value);
  const state = stateInput ? stateInput.value : null;

  if (!isNaN(delay) && state !== null) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });

    promise
      .then(delay => {
        // Виконано успішно
        iziToast.success({
          message: `✅ Fulfilled promise in ${delay}ms`,
          position: 'topRight',
        });
      })
      .catch(delay => {
        // Відхилено
        iziToast.error({
          message: `❌ Rejected promise in ${delay}ms`,
          position: 'topRight',
        });
      });
  }
});
