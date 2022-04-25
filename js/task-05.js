const inputRef = document.querySelector('input#name-input');
const outputRef = document.querySelector('span#name-output');

inputRef.addEventListener('input', (e) => {
    if (e.target.value == "") {
        outputRef.textContent = "Anonymous";
        return;
    }
        
    outputRef.textContent = e.target.value;
});