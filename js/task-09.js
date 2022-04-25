function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyRef = document.querySelector('body'),
      colorLabelRef = document.querySelector('span.color'),
      changeColorRef = document.querySelector('button.change-color');

bodyRef.addEventListener('click', (e) => {
  if (e.target === changeColorRef) {
    const newColor = getRandomHexColor();
    e.currentTarget.style.backgroundColor = newColor;
    colorLabelRef.textContent = newColor;
  }
});

