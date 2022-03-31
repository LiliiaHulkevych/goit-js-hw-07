const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text')

inputRef.addEventListener('input',  sizeChange);

console.dir(textRef)

function sizeChange(event) {
    textRef.style.fontSize = `${event.target.value}px`;

}

