const input = document.querySelector('#validation-input');

input.addEventListener('blur', inputBlur);

function inputBlur(event) {

    switch (event.currentTarget.value.length) {
        case Number(input.dataset.length):
            input.classList.remove("invalid");
            input.classList.add("valid") ;
            break;
    
        case 0:
            input.classList.remove("valid");
            input.classList.remove("invalid");
                break;
        default:
            input.classList.remove("valid");
            input.classList.add("invalid") ; 
            break;
    }
}
