function formSubmit(event, form) {
    event.preventDefault();
}

function checkInputValidity(form, input, inputErrorClass) {
    const errorMessage = form.querySelector(`#error-${input.id}`)
    if (input.validity.valid) {
        errorMessage.textContent = '';
        input.classList.remove(inputErrorClass);
    } else {
        errorMessage.textContent = input.validationMessage;
        input.classList.add(inputErrorClass);
    }
}



const checkButtonValidity = (form, button, inactiveButtonClass) => {
    if  (form.checkValidity()) {
        button.removeAttribute('disabled');
        button.classList.remove(inactiveButtonClass);
        
    } else {
        button.setAttribute('disabled', ' ');
        button.classList.add(inactiveButtonClass);
    }
}


function enableValidation({formsSelector, inputSelector, submitButtonsSelector, inactiveButtonClass, inputErrorClass, closePopupClass}) {
    const forms = document.querySelectorAll(formsSelector);
    console.log(forms)
    forms.forEach(form => {
        form.addEventListener('submit', () => formSubmit(event, form));
        const inputs = form.querySelectorAll(inputSelector);
        const button = form.querySelector(submitButtonsSelector);
        checkButtonValidity(form, button, inactiveButtonClass)
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                checkInputValidity(form, input, inputErrorClass);
                checkButtonValidity(form, button, inactiveButtonClass);
            })
        })
    })

}

enableValidation({
    formsSelector: '.popup__text',
    inputSelector: '.popup__input',
    submitButtonsSelector: '.popup__action',
    inactiveButtonClass: 'input__button_disabled',
    inputErrorClass: 'input__text_type-error',
});



