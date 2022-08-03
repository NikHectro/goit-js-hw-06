'use srtict';

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsEl = document.querySelector('#ingredients');

const ingredArray = ingredients.map(ingredient => {
  const listElement = document.createElement('li');
  listElement.classList.add('item');
  listElement.textContent = ingredient;
  return listElement;
});
  ingredientsEl.append(...ingredArray);

// ingredients.forEach(function (ingredient) {
//   const listElement = document.createElement('li');
//   listElement.classList.add('item');
//   listElement.textContent = ingredient;
//   ingredientsEl.after(listElement); - не робить за одне додавання!
// });