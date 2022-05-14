export class FormValidator {
    constructor (settings, form) {
     this._form = form
     this._settings = settings
    }

    _checkInputValidity(input) {``
        const {inputErrorClass} = this._settings
        const errorMessage = this._form.querySelector(`#error-${input.id}`)
        if (input.validity.valid) {
            errorMessage.textContent = '';
            input.classList.remove(inputErrorClass);
        } else {
            errorMessage.textContent = input.validationMessage;
            input.classList.add(inputErrorClass);
        }
    }
    _checkButtonValidity () {
        const {inactiveButtonClass} = this._settings
        if  (this._form.checkValidity()) {
            this._button.removeAttribute('disabled');
            this._button.classList.remove(inactiveButtonClass);
            
        } else {
            this._button.setAttribute('disabled', ' ');
            this._button.classList.add(inactiveButtonClass);
        }
    } 

    _setEventListeners () {
        const {inputSelector, submitButtonsSelector} = this._settings
        const inputs = this._form.querySelectorAll(inputSelector);
        this._button = this._form.querySelector(submitButtonsSelector);
        this._checkButtonValidity()
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
                this._checkButtonValidity();
            })
        })
    }

    enableValidation() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners()
    };
}

