// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const ulGallery = document.querySelector('.gallery');

const  galleryItem = ({ preview, original, description }) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
    />
    </a>
    </li>`
}

const galleryCards = galleryItems.map(galleryItem).join('');
ulGallery.insertAdjacentHTML('afterbegin', galleryCards);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});