export const closePopup = (openedPopup) => {
    openedPopup.classList.remove('popup_opened')
}


export const closeByEsc = (evt) => {
    if (evt.key === "Escape") {
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup); 
    }
}



export const togglePopup = (modalWindow) => {                    /* функция отвечает за открытие и закрытие кнопки редактирования и обновляет данные*/
modalWindow.classList.toggle('popup_opened');
if ([modalWindow.classList.contains('popup_opened')]){
    document.addEventListener('keydown',  closeByEsc);
} else {
    document.removeEventListener('keydown',  closeByEsc);
}
}


