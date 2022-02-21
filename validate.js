function formSubmit(event, form) {
    event.preventDefault();
}

function checkInputValidity(form, input, inputErrorClass) {
    const errorMessage = form.querySelector(`#error-${input.id}`)
    console.log(errorMessage)
    if (input.validity.valid) {
        errorMessage.textContent = '';
        input.classList.remove(inputErrorClass);
    } else {
        errorMessage.textContent = input.validationMessage;
        input.classList.add(inputErrorClass);
    }
}

function closePopup(closePopupClass) {
    const popups = document.querySelectorAll('.popup')
    popups.forEach(popup => {
        popup.classList.remove(closePopupClass)
    })
    
}

const checkButtonValidity = (form, button, inactiveButtonClass) => {
    if  (form.checkValidity()) {
        console.log("333");
        button.removeAttribute('disabled');
        button.classList.remove(inactiveButtonClass);
        
    } else {
        console.log("666");
        button.setAttribute('disabled', ' ');
        button.classList.add(inactiveButtonClass);
    }
}


function enableValidation({formsSelector, inputSelector, submitButtonsSelector, submitButtonsSelectorNewPhoto, inactiveButtonClass, inputErrorClass, closePopupClass}) {
    const forms = document.querySelectorAll(formsSelector);
    console.log(forms)
    forms.forEach(form => {
        form.addEventListener('submit', () => formSubmit(event, form));
        const inputs = form.querySelectorAll(inputSelector);
        const button = form.querySelector(submitButtonsSelector);
        const button_new_photo = document.querySelector(submitButtonsSelectorNewPhoto);
        checkButtonValidity(form, button_new_photo, inactiveButtonClass)
    
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                checkInputValidity(form, input, inputErrorClass);
                checkButtonValidity(form, button, inactiveButtonClass);
            })
        })
    })

    document.addEventListener('keydown', function (e) {
        if( e.key === "Escape") {
            closePopup(closePopupClass)
        }
      }); 
}

enableValidation({
    formsSelector: '.popup__text',
    inputSelector: '.popup__input',
    submitButtonsSelector: '.popup__action',
    submitButtonsSelectorNewPhoto: '.elements-popup__action',
    inactiveButtonClass: 'input__button_disabled',
    inputErrorClass: 'input__text_type-error',
    closePopupClass: 'popup_opened',
});



