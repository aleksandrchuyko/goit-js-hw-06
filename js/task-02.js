const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
const ingredientsItems = [];
ingredients.forEach(ingredient => {
  const elem = document.createElement('li');
  elem.classList.add("item");
  elem.textContent = ingredient;
  ingredientsItems.push(elem);
});
// const ingredientsItems = ingredients.map(ingredient => {
//   const elem = document.createElement('li');
//   elem.classList.add("item");
//   elem.textContent = ingredient;
// return elem;})
ingredientsList.append(...ingredientsItems);

