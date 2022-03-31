const formRef = document.querySelector('#controls');
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const divBox = document.querySelector('#boxes')
const inputRef = document.querySelector('input');


renderBtn.addEventListener('click', createBoxesClick)
destroyBtn.addEventListener('click', destroyBoxes)



function createBoxesClick() {
    divBox.innerHTML = '';
    let amount = inputRef.value;
    createBoxes(amount)
 
}



function createBoxes(amount) {

    const divArray = [];
    const sizeFirstDiv = 30;

    for(let i=0; i < amount; i+=1 ) {
        let widthDiv = sizeFirstDiv + i * 10;
        let heightDiv = sizeFirstDiv + i * 10;
        const divEl = document.createElement('div') 
        divEl.style.backgroundColor = '#' + Math.random().toString(16).slice(3, 9);
        divEl.style.width = `${widthDiv}px`
        divEl.style.height = `${heightDiv}px`
    
     divArray.push(divEl)
    }
   divBox.append(...divArray)

}


function destroyBoxes(event) {
    divBox.innerHTML = '';
    inputRef.value = '';
}

