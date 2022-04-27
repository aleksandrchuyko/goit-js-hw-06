function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesContainerRef = document.querySelector('div#boxes'),
      boxesAmountRef = document.querySelector('#controls input'),
      createBoxesRef = document.querySelector('button[data-create]'),
      destroyBoxesRef = document.querySelector('button[data-destroy]');

createBoxesRef.addEventListener('click', () => {
  const boxesArr = [];
  for (let i = 0; i < boxesAmountRef.value; i++) {
    const elem = document.createElement('div');
    elem.style.width = `${30 + i*10}px`;
    elem.style.height = `${30 + i*10}px`;
    elem.style.backgroundColor = getRandomHexColor();
    boxesArr.push(elem);
  }
  boxesContainerRef.append(...boxesArr);
});

destroyBoxesRef.addEventListener('click', () => {
  boxesContainerRef.innerHTML = "";
});