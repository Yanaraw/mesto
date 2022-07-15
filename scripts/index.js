
import {open, close} from './utils.js';
import {FormValidator} from './FormValidator.js';
import {Card} from './Card.js';
import '../pages/index.css';
import "../src/index.html";
import {initialCards} from './cards.js';



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
        close(modalWindow)
    }
}

function handleSaveButton(event) {
    event.preventDefault();
    about.textContent = newAbout.value;
    namee.textContent = newName.value;
    if (event.currentTarget === event.target) {
        close(popupProfile)
    }
}

function handleProfileForm () {
    open(popupProfile)
    newName.value= namee.textContent;
    newAbout.value=about.textContent;
}

popupOpenButton.addEventListener('click', handleProfileForm);
popupCloseButton.addEventListener('click', () => close(popupProfile));
popupProfile.addEventListener('click', () => closePopupOnOverlayClick(event, popupProfile));
editForm.addEventListener('submit', handleSaveButton);

/* эта часть кода подгружает картинки */
const elementsTemplate = document.querySelector(".elements-template").content.querySelector('.elements__card');
const container = document.querySelector(".elements__cards")
export const popupImage = document.querySelector('.popup__image')
export const popupImageFigcaption = document.querySelector('.popup__img-figcaption')
export const popupOpenImage = document.querySelector('.image-popup');
const closeCrossImg = document.querySelector('.popup__img-popup-close');

initialCards.forEach((element) => {
    container.prepend(renderCard(element));
})

function renderCard(cardd) {
    const card = new Card (cardd, '.elements-template')
    const cardElement = card.createNewCard()

    return cardElement
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
    const cardN = {
        name: popupInputName.value,
        link: popupInputPic.value
    }

    container.prepend(renderCard(cardN));
    close(elementsPopup) 
    popupInputName.value = '';
    popupInputPic.value = '';
};

popupAddPicButton.addEventListener('click', () => open(elementsPopup));
popupAddPicClose.addEventListener('click', () => close(elementsPopup));
elementsPopup.addEventListener('click', () => closePopupOnOverlayClick(event, elementsPopup));
addCardForm.addEventListener('submit', createNewElement);
popupOpenImage.addEventListener('click', () => closePopupOnOverlayClick(event, popupOpenImage));
closeCrossImg.addEventListener('click', () => close(popupOpenImage))

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