
import {togglePopup} from './utils.js'
import {FormValidator} from './FormValidator.js'
import {Card} from './Card.js'


/* эта часть кода относится к блоку редактирования информации о пользователе */
const popupOpenButton = document.querySelector('.profile__edit');
const popupCloseButton = document.querySelector('.profile-popup__close');
const popupProfile = document.querySelector('.profile-popup');
const actionButton = document.querySelector('.profile-popup__action');
const editForm = document.querySelector('.profile-popup__text');
const namee = document.getElementById('name');
const about = document.getElementById('about');
const newAbout = document.getElementById('user_description');
const newName = document.getElementById('username');

function closePopupOnOverlayClick(event, modalWindow) {
    if (event.currentTarget === event.target) {
        togglePopup(modalWindow)
    }
}

function handleSaveButton(event) {
    event.preventDefault();
    about.textContent = newAbout.value;
    namee.textContent = newName.value;
    if (event.currentTarget === event.target) {
        togglePopup(popupProfile)
    }
}

function handleProfileForm () {
    togglePopup(popupProfile)
    newName.value= namee.textContent;
    newAbout.value=about.textContent;
}

popupOpenButton.addEventListener('click', handleProfileForm);
popupCloseButton.addEventListener('click', () => togglePopup(popupProfile));
popupProfile.addEventListener('click', () => closePopupOnOverlayClick(event, popupProfile));
editForm.addEventListener('submit', handleSaveButton);

/* эта часть кода подгружает картинки */
const elementsTemplate = document.querySelector(".elements-template").content.querySelector('.elements__card');
const container = document.querySelector(".elements__cards")

initialCards.forEach((element) => {
    renderCard(element, container); 
})

const popupOpenImage = document.querySelector('.image-popup');
const closeCrossImg = document.querySelector('.popup__img-popup-close');

function renderCard(cardd, container) {
    const card = new Card (cardd, '.elements-template')
    const cardElement = card.createNewCard()
    container.prepend(cardElement);
}
/* эта часть кода относится к блоку добавления новых карточек */

const popupAddPicButton = document.querySelector(".profile__add-pic-button");
const popupAddPicClose = document.querySelector(".elements-popup__close");
const elementsPopup = document.querySelector(".elements-popup");
const addCardForm = document.querySelector(".elements-popup__text");
const popupInputName = document.querySelector('.popup__input-name');
const popupInputPic = document.querySelector('.popup__input-pic');

function createNewElement(event) {
    event.preventDefault();
    togglePopup(elementsPopup) 
    const cardN = {
        name: popupInputName.value,
        link: popupInputPic.value
    }
    

    renderCard(cardN, container); 

    const button = document.querySelector('.elements-popup__action')
    button.setAttribute('disabled', '');
    button.classList.add('input__button_disabled');

    popupInputName.value = '';
    popupInputPic.value = '';
};

popupAddPicButton.addEventListener('click', () => togglePopup(elementsPopup));
popupAddPicClose.addEventListener('click', () => togglePopup(elementsPopup));
elementsPopup.addEventListener('click', () => closePopupOnOverlayClick(event, elementsPopup));
addCardForm.addEventListener('submit', createNewElement);
popupOpenImage.addEventListener('click', () => closePopupOnOverlayClick(event, popupOpenImage));
closeCrossImg.addEventListener('click', () => togglePopup(popupOpenImage))

const validationConfig = {
    formsSelector: '.popup__text',
    inputSelector: '.popup__input',
    submitButtonsSelector: '.popup__action',
    inactiveButtonClass: 'input__button_disabled',
    inputErrorClass: 'input__text_type-error',
};

const editProfileValidator = new FormValidator(validationConfig, editForm);
const addCardValidator = new FormValidator(validationConfig, addCardForm);

editProfileValidator.enableValidation()
addCardValidator.enableValidation()