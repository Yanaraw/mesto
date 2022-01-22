/* эта часть кода относится к блоку редактирования информации о пользователе */
const popupOpenButton = document.querySelector('.profile__edit');
const popupCloseButton = document.querySelector('.profile-popup__close');
const popupProfile = document.querySelector('.profile-popup');
const actionButton = document.querySelector('.profile-popup__action');
const editForm = document.querySelector('.profile-popup__text');
const namee = document.getElementById('name');
const about = document.getElementById('about');
const newAbout = document.getElementById('new_about');
const newName = document.getElementById('new_name');

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
popupCloseButton.addEventListener('click', handleProfileForm);
popupProfile.addEventListener('click', () => closePopupOnOverlayClick(event, popupProfile));
editForm.addEventListener('submit', handleSaveButton);

/* эта часть кода подгружает картинки */
const elementsTemplate = document.querySelector(".elements-template").content.querySelector('.elements__card');
const ListOfCards = document.querySelector('.elements__cards');

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

function createNewCard(element) {
    const elements = elementsTemplate.cloneNode(true)
    elements.querySelector(".elements__img").src = element.link
    elements.querySelector(".elements__description").textContent = element.name
    ListOfCards.prepend(elements)

    const deleteButton = elements.querySelector('.elements__delete-button');
    const likeButton = elements.querySelector('.elements__like');
    const imageButton = elements.querySelector('.elements__img');

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
const AddCardForm = document.querySelector(".elements-popup__text");
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

    popupInputName.value = '';
    popupInputPic.value = '';
};

popupAddPicButton.addEventListener('click', () => togglePopup(elementsPopup));
popupAddPicClose.addEventListener('click', () => togglePopup(elementsPopup));
elementsPopup.addEventListener('click', () => closePopupOnOverlayClick(event, elementsPopup));
AddCardForm.addEventListener('submit', createNewElement);
popupOpenImage.addEventListener('click', () => closePopupOnOverlayClick(event, popupOpenImage));
closeCrossImg.addEventListener('click', () => togglePopup(popupOpenImage))
