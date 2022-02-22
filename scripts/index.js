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

function togglePopup(modalWindow) {                    /* функция отвечает за открытие и закрытие кнопки редактирования и обновляет данные*/
    modalWindow.classList.toggle('popup_opened');
}   

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
const listOfCards = document.querySelector('.elements__cards');

initialCards.forEach((element) => {
    createNewCard(element)
})

/* Функция удаляет карточку */
function handleDeleteButton(e) {
    e.target.closest(".elements__card").remove()
}

/* Функция изменяет кнопку like на черную */
function handleLikeButton(e) {
    e.target.classList.toggle('elements__like_active')
}

const popupOpenImage = document.querySelector('.image-popup');
const closeCrossImg = document.querySelector('.popup__img-popup-close');

function renderCard(card, container) {
    container.prepend(card);
} 

function createNewCard(element) {
    const card = elementsTemplate.cloneNode(true)
    card.querySelector(".elements__img").src = element.link
    card.querySelector(".elements__description").textContent = element.name

    renderCard(card, listOfCards)

    const deleteButton = card.querySelector('.elements__delete-button');
    const likeButton = card.querySelector('.elements__like');
    const imageButton = card.querySelector('.elements__img');

    deleteButton.addEventListener('click', handleDeleteButton)
    likeButton.addEventListener('click', handleLikeButton)
    imageButton.addEventListener('click', openImage)

    function openImage(e) {
        togglePopup(popupOpenImage)
        document.querySelector('.popup__image').src = e.target.src
        document.querySelector('.popup__img-figcaption').textContent = element.name
    }
};

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
    const card = {
        name: popupInputName.value,
        link: popupInputPic.value
    }
    createNewCard(card)

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

function closePopup(openedPopup) {
    openedPopup.classList.remove('popup_opened')
}

function closeByEsc(evt) {
    if (evt.key === "Escape") {
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup); 
    }
}

document.addEventListener('keydown',  closeByEsc)
