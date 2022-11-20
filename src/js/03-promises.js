import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector("[name='delay']"),
  step: document.querySelector("[name='step']"),
  amount: document.querySelector("[name='amount']"),
};

refs.form.addEventListener('submit', onStart);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
   const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
};

function onStart(e) {
  e.preventDefault();
  let delay = Number(refs.delay.value);
  let step = Number(refs.step.value);
  let amount = Number(refs.amount.value);
  delay = delay - step;
  for (let position = 1; position <= amount; position += 1) {
    delay += step;

    createPromise(position, delay)
      .then(result => {
        Notiflix.Notify.success(result);
      })
      .catch(error => {
        Notiflix.Notify.failure(error);
      });
  };
};
