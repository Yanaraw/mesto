export const closePopup = (openedPopup) => {
    openedPopup.classList.remove('popup_opened')
}

export const closeByEsc = (evt) => {
    if (evt.key === "Escape") {
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup); 
     // document.removeEventListener('keydown',  closeByEsc);
    }
}

export const open = (modalWindow) => {  
    modalWindow.classList.add('popup_opened');
    document.addEventListener('keydown',  closeByEsc);
}

export const close = (modalWindow) => {
    modalWindow.classList.remove('popup_opened');
    document.removeEventListener('keydown',  closeByEsc);
}
