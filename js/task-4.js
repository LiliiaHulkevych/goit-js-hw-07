let counterValue = 0
const valueEl = document.querySelector('#value');
const decBtnEl = document.querySelector('[data-action="decrement"]');
const incBtnEl = document.querySelector('[data-action="increment"]');



function increment() {
     counterValue += 1;
     valueEl.textContent = counterValue
 }

 function decrement() {
     counterValue -= 1;
     valueEl.textContent = counterValue
     }

 
incBtnEl.addEventListener('click', increment, );
decBtnEl.addEventListener('click', decrement);

