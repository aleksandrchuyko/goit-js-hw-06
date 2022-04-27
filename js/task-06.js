const inputRef = document.getElementById('validation-input');

inputRef.addEventListener('blur', (e) => {
    if (e.target.value.length === +e.target.dataset.length) {
        e.target.classList.add('valid');
        e.target.classList.remove('invalid');
    }
    else {
        e.target.classList.add('invalid');
        e.target.classList.remove('valid');
    }
});
