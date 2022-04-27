const formRef = document.querySelector('.login-form');
const emailRef = document.querySelector('input[name="email"]');
const passwordRef = document.querySelector('input[name="password"]');

const formData = {};

formRef.addEventListener('submit', (e) => {
    e.preventDefault();
    if (emailRef.value && passwordRef.value) {
        formData[emailRef.getAttribute('name')] = emailRef.value;
        formData[passwordRef.getAttribute('name')] = passwordRef.value;
        console.log(formData);
    } else {
        alert("Заполните все поля!");
    }
    e.currentTarget.reset();
});


