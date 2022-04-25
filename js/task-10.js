function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesContainerRef = document.querySelector('div#boxes'),
      boxesAmountRef = document.querySelector('#controls input'),
      createBoxesRef = document.querySelector('button[data-create]'),
      destroyBoxesRef = document.querySelector('button[data-destroy]');
let   boxWidth = 30,
      boxHeight = 30;

createBoxesRef.addEventListener('click', () => {
  const boxesArr = [];
  for (let i = 0; i < boxesAmountRef.value; i++) {
    const elem = document.createElement('div');
    elem.style.width = `${boxWidth}px`;
    boxWidth += 10;
    elem.style.height = `${boxHeight}px`;
    boxHeight += 10;
    elem.style.backgroundColor = getRandomHexColor();
    boxesArr.push(elem);
  }
  boxesContainerRef.append(...boxesArr);
});

destroyBoxesRef.addEventListener('click', () => {
  boxesContainerRef.innerHTML = "";
  boxWidth = 30,
  boxHeight = 30;
});