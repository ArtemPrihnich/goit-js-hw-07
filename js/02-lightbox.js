import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const storage = document.querySelector('.gallery')

function makeMarkup() {
    return galleryItems.map(item => 
        `<a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>`
    ).join("");
}

storage.innerHTML = makeMarkup();

var lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });