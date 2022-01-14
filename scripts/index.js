/* эта часть кода относится к блоку редактирования информации о пользователе */
const popupOpenButton = document.querySelector('.profile__edit');
const popupCloseButton = document.querySelector('.profile-popup__close');
const popup = document.querySelector('.profile-popup');
const actionButton = document.querySelector('.profile-popup__action');
const editForm = document.querySelector('.profile-popup__text');

let namee = document.getElementById('name');
let about = document.getElementById('about');

let newAbout = document.getElementById('new_about');
let newName = document.getElementById('new_name');

function togglePopup() {                    /* функция отвечает за открытие и закрытие кнопки редактирования и обновляет данные*/
    popup.classList.toggle('profile-popup_opened');
    newName.value= namee.textContent;
    newAbout.value=about.textContent;
}   

function closePopupOnOverlayClik(event) {
    if (event.currentTarget === event.target) {
        popup.classList.remove('profile-popup_opened')
    }
}

function save(event) {
    event.preventDefault();
    about.textContent = newAbout.value;
    namee.textContent = newName.value;
    if (event.currentTarget === event.target) {
        popup.classList.remove('profile-popup_opened')
    }
}

popupOpenButton.addEventListener('click', togglePopup);
popupCloseButton.addEventListener('click', togglePopup);
popup.addEventListener('click', closePopupOnOverlayClik);
editForm.addEventListener('submit', save);


/* эта часть кода подгружает картинки */
const elementsTemplate = document.querySelector(".elements-template").content;
const List = document.querySelector('.elements__cards');
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

xxx(initialCards)

/* Функция удаляет карточку */
function deleteHandler(e) {
    e.target.closest(".elements__card").remove()
}

/* Функция изменяет кнопку like на черную */
function likeHandler(e) {
    e.target.classList.toggle('elements__like_active')
}

const popupOpenImage = document.querySelector('.image-popup');
const closeCrossImg = document.querySelector('.img-popup__close');

/* Функция открывает картинку */
function openImage(e) {
    popupOpenImage.classList.toggle("image-popup__active");
    document.querySelector('.popup__image').src = e.target.src
    document.querySelector('.popup__img-figcaption').textContent = "Челябинская область"
}

function closePopupImage () {
    popupOpenImage.classList.toggle("image-popup__active");
}

function xxx(ele) {
    ele.forEach((element) => {
        const elements = elementsTemplate.cloneNode(true)
        elements.querySelector(".elements__img").src = element.link
        elements.querySelector(".elements__description").textContent = element.name
        List.prepend(elements)
        const deleteButton = document.querySelector('.elements__delete-button');
        const likeButton = document.querySelector('.elements__like');
        const imageButton = document.querySelector('.elements__img');

        deleteButton.addEventListener('click', deleteHandler)
        likeButton.addEventListener('click', likeHandler)
        imageButton.addEventListener('click', openImage)

        function openImage(e) {
            popupOpenImage.classList.toggle("image-popup__active");
            document.querySelector('.popup__image').src = e.target.src
            document.querySelector('.popup__img-figcaption').textContent = element.name
        }
    })
};

/* эта часть кода относится к блоку добавления новых карточек */

const popupAddPicButton = document.querySelector(".profile__add-pic-button");
const popupAddPicClose = document.querySelector(".elements-popup__close");
const elementsPopup = document.querySelector(".elements-popup");
const AddCardForm = document.querySelector(".elements-popup__text");
const imagePopup = document.querySelector('.image-popup');

function createNewElement(event) {
    event.preventDefault();
    elementsPopup.classList.toggle('elements-popup_opened');  
    const popupInputName = document.querySelector('.popup__input-name');
    const popupInputPic = document.querySelector('.popup__input-pic');
    obj = [{
        name: popupInputName.value,
        link: popupInputPic.value
    }]
    xxx(obj)

    popupInputName.value = '';
    popupInputPic.value = '';
};

function togglePopupAddPic () {
    elementsPopup.classList.toggle('elements-popup_opened');  
};

function closePopupAddPicOnOverlayClik(event) {
    if (event.currentTarget === event.target) {
        elementsPopup.classList.remove('elements-popup_opened');
    };
};

function closeImg (event) {
    if (event.currentTarget === event.target) {
        imagePopup.classList.remove('image-popup__active')
    };
};


popupAddPicButton.addEventListener('click', togglePopupAddPic);
popupAddPicClose.addEventListener('click',  togglePopupAddPic);
elementsPopup.addEventListener('click', closePopupAddPicOnOverlayClik);
AddCardForm.addEventListener('submit', createNewElement);
imagePopup.addEventListener('click', closeImg);
closeCrossImg.addEventListener('click', closePopupImage);