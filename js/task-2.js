const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
  ];

  const listEl = document.querySelector('#ingredients');
  const elements = [];

   ingredients.forEach( element => {
      const itemEl = document.createElement('li');
      itemEl.textContent = element;
      elements.push(itemEl);
  });

  listEl.append(...elements);
