const rangeRef = document.getElementById('font-size-control');
const textRef = document.getElementById('text');

rangeRef.addEventListener('input', (e) => {
    textRef.style.fontSize = `${e.target.value}px`;
    
});