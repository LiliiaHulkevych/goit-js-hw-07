const categoriesEl = document.querySelectorAll('.item');
console.log(`У списку ${categoriesEl.length} категорії`);

categoriesEl.forEach(item => {
    console.log('Категорія:', item.firstElementChild.textContent, `Кількість елементів: ${item.lastElementChild.children.length}`)
});
