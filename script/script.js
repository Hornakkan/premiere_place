let carouselInner = document.querySelector('#cardSliderInner');

let carouselPrev  =document.querySelector('#cardSliderPrev');
let carouselNext  =document.querySelector('#cardSliderNext');

carouselPrev.addEventListener('click', () => {
    let firstChild = carouselInner.firstElementChild;
    let carouselItems = document.querySelectorAll('#cardSliderItem');

    carouselItems.forEach(carouselItem => {
        carouselItem.classList.remove('active')
    });

    carouselInner.firstElementChild.remove();
    carouselInner.appendChild(firstChild);
    carouselInner.firstElementChild.classList.add('active');
})

carouselNext.addEventListener('click', () => {
    let lastChild = carouselInner.lastElementChild;
    
    let carouselItems = document.querySelectorAll('#cardSliderItem');

    carouselItems.forEach(carouselItem => {
        carouselItem.classList.remove('active')
    });

    carouselInner.lastElementChild.remove();
    carouselInner.insertBefore(lastChild, carouselInner.firstElementChild);
    carouselInner.lastElementChild.classList.add('active');
})