const counterValueRef = document.getElementById('value');
let counterValue = 0;

const counterIncrementRef = document.querySelector('button[data-action="increment"]');
counterIncrementRef.addEventListener('click', () => {
    counterValue++;
    counterValueRef.textContent = counterValue;
});

const counterDecrementRef = document.querySelector('button[data-action="decrement"]');
counterDecrementRef.addEventListener('click', () => {
    counterValue--;
    counterValueRef.textContent = counterValue;
});
