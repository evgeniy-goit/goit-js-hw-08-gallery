const modalElement = document.querySelector('.js-lightbox');
const modalOverlayElement = document.querySelector('.lightbox__overlay');
const modalImageElement = document.querySelector('.lightbox__image');
const modalButtonClose = document.querySelector('button[data-action="close-lightbox"]');
const galleryElement = document.querySelector('.js-gallery');



function onImageClick(event) {
    event.preventDefault();
    window.addEventListener("keydown", onEscKeyPress);
    modalElement.classList.add("is-open");
    updateAttribute(event.target.alt, event.target.dataset.source);
}



function onModalClose() {
    window.removeEventListener("keydown", onEscKeyPress);
    modalElement.classList.remove("is-open");
    updateAttribute();
}

function updateAttribute(alt = "", src = "") {
    modalImageElement.src = src;
    modalImageElement.alt = alt;
}

function onEscKeyPress(event) {
    if (event.code === 'Escape') {
        onModalClose(event)
    }

};

 
galleryElement.addEventListener('click', onImageClick);

modalButtonClose.addEventListener('click', onModalClose);

modalOverlayElement.addEventListener('click', (event) => {
    if (event.currentTarget === event.target) {
        onModalClose()
    }
});







