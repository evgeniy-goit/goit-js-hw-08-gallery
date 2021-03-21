import galleryItems from "./gallery-items.js";


const makeGalleryItems = ({preview, original, description}) => {
    const itemElements = document.createElement('LI');
    itemElements.classList.add('gallery__item');
    
    const linkElements = document.createElement('A');
    linkElements.classList.add('gallery__link');
    linkElements.href = original;
    
    const imageElements = document.createElement('IMG');
    imageElements.classList.add('gallery__image');

    imageElements.src = preview;
    imageElements.dataset.source = original;
    imageElements.alt = description;

    linkElements.appendChild(imageElements);
    itemElements.appendChild(linkElements);
    
    return itemElements;
}

const galleryItemsSet = galleryItems.map(makeGalleryItems);

const galleryElements = document.querySelector('.js-gallery')
galleryElements.append(...galleryItemsSet);