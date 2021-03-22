const modalElement = document.querySelector('.js-lightbox');
const modalOverlayElement = document.querySelector('.lightbox__overlay');
const modalImageElement = document.querySelector('.lightbox__image');
const modalButtonClose = document.querySelector('button[data-action="close-lightbox"]');
const galleryElement = document.querySelector('.js-gallery');


function onImageClick(event) {
    event.preventDefault();
    window.addEventListener('keydown', onEscKeyPress);
    modalElement.classList.add('is-open');
    modalImageElement.src = event.target.dataset.source;
};

function onModalClose(event) {
    window.removeEventListener('keydown', onEscKeyPress);
    modalElement.classList.remove('is-open');
    modalImageElement.src = '';

};

function onEscKeyPress(event) {
    if (event.code === 'Escape') {
        onModalClose(event)
    }

    // if (event.code === "ArrowLeft") {
    //     arrowLeft()
    // }

    // if (event.code === "ArrowRight") {
    //     arrowRight()
    // }
};

 
galleryElement.addEventListener('click', onImageClick);

modalButtonClose.addEventListener('click', onModalClose);

modalOverlayElement.addEventListener('click', (event) => {
    if (event.currentTarget === event.target) {
        onModalClose()
    }
});

