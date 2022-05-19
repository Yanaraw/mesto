import {togglePopup} from './utils.js'


export class Card {
    constructor(data, cardTemplateSelector) {
        this._elementsTemplate = document.querySelector(cardTemplateSelector).content.querySelector('.elements__card');
        this._data = data;
    }

    _handleDeleteButton = ()  => {
        this._card.remove()
    }

    _handleLikeButton = () => {
        this._likeButton.classList.toggle('elements__like_active')
    }

    _openImage = (e) => {
        const popupOpenImage = document.querySelector('.image-popup');
        togglePopup(popupOpenImage)
        document.querySelector('.popup__image').src = e.target.src
        document.querySelector('.popup__img-figcaption').textContent = this._data.name
    }

    _setEventListeners = () => {
        const deleteButton = this._card.querySelector('.elements__delete-button');
        deleteButton.addEventListener('click', this._handleDeleteButton)
        this._likeButton.addEventListener('click', this._handleLikeButton)
        this._imageButton.addEventListener('click', this._openImage)
    }
    
    createNewCard() {
        this._card = this._elementsTemplate.cloneNode(true);
        this._card.querySelector(".elements__img").src = this._data.link;
        this._card.querySelector(".elements__description").textContent = this._data.name;
    
        this._likeButton = this._card.querySelector('.elements__like');
        this._imageButton = this._card.querySelector('.elements__img');
    
        this._setEventListeners()
        return this._card;
    };
} 