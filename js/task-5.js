const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');


input.addEventListener('input', inputChange);

function inputChange(event) {
    const textValue = event.target.value
    textValue.length === 0 ? span.textContent = 'незнайомець' : span.textContent = textValue

};