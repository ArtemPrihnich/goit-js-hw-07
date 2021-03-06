import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const storage = document.querySelector('.gallery')

function makeMarkup() {
    return galleryItems.map(item => 
        `<a class="gallery__link" href="${item.original}">
        <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
        />
    </a>`
    ).join("");
}

storage.innerHTML = makeMarkup();

storage.addEventListener("click", handleImageClick)
let modal = '';

function handleImageClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
    return
    }
    const originalImageURL = event.target.getAttribute("data-source");

    modal = basicLightbox.create(`<img src="${originalImageURL}" width="800" height="600">`, { onClose: () => { return document.removeEventListener("keydown", onEscapeClick); } })
    modal.show()

    if (modal.visible()) {
        return document.addEventListener("keydown", onEscapeClick)
    }

    if (modal.close()) {
        return document.removeEventListener("keydown", onEscapeClick);
    }

}

 function onEscapeClick(event) {
     if (event.code === "Escape") {
        modal.close();
        return document.removeEventListener("keydown", onEscapeClick);
    }
 }
