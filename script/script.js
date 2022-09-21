let carouselInner = document.querySelector('#cardSliderInner');
let carouselItem = document.querySelector('#cardSliderItem');

let carouselPrev  =document.querySelector('#cardSliderPrev');
let carouselNext  =document.querySelector('#cardSliderNext');

carouselPrev.addEventListener('click', () => {
    let firstChild = carouselInner.firstElementChild;
    carouselInner.firstElementChild.remove();
    carouselInner.appendChild(firstChild);
})

carouselNext.addEventListener('click', () => {
    let lastChild = carouselInner.lastElementChild;
    carouselInner.lastElementChild.remove();
    carouselInner.insertBefore(lastChild, carouselInner.firstElementChild);
})