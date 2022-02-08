const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createIngredientItem = ingredient => {
  const vegetableItemEl = document.createElement('li');
  vegetableItemEl.classList.add('ingredients__item');
  vegetableItemEl.textContent = ingredient;

  return vegetableItemEl;
};

const ingredientsItem = ingredients.map(ingredient =>
  createIngredientItem(ingredient),
);
console.log(ingredientsItem);

const ingredientsListEl = document.querySelector('#ingredients');
ingredientsListEl.append(...ingredientsItem);
