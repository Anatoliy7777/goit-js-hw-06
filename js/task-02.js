const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createIngredientItem => {
  const vegetableItemEl = document.createElement('li');
  vegetableItemEl.classList.add('ingredients_item');
  vegetableItemEl.textContent = ingredient;

  return vegetableItemEl;
};

const ingredientsItem = ingredients.map(ingredient => createIngredientItem(ingredient));
console.log(ingredientsItem);

const ingredientsListEl = document.querySelector('#ingredients');
ingredientsListEl.append(...ingredientsItem);
