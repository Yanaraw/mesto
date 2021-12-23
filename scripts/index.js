const popupOpenButton = document.querySelector('.profile__edit');
const popupCloseButton = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
const saveButton = document.querySelector('.popup__save');
let namee = document.getElementById('name');
let about = document.getElementById('about');

let newAbout = document.getElementById('new_about');
let newName = document.getElementById('new_name');

function togglePopup() {
    popup.classList.toggle('popup_opened');
    newName.value= namee.textContent;
    newAbout.value=about.textContent;
}   

function closePopupOnOverlayClik(event) {
    if (event.currentTarget === event.target) {
        popup.classList.remove('popup_opened')
    }
}

function save(event) {
    about.textContent = newAbout.value;
    namee.textContent = newName.value;
    if (event.currentTarget === event.target) {
        popup.classList.remove('popup_opened')
    }
}

popupOpenButton.addEventListener('click', togglePopup);
popupCloseButton.addEventListener('click', togglePopup);
popup.addEventListener('click', closePopupOnOverlayClik);
saveButton.addEventListener('click', save);
