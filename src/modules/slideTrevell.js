'use strict';

const travelersOverview = ()=> {
    const wrapAllTrevellers = document.querySelector('.wrap_all_trevellers');
    const allTrevellers = document.querySelector('.all_trevellers');
    const itemTreveller = document.querySelectorAll('.item_treveller');
    const wrpaSlideOrder = document.querySelector('.wrpa_slide_order');

    const sliderTravellers = document.querySelector('.slider_travellers');
    const arrowLeft = sliderTravellers.querySelector('.arrow_left');
    const arrowRight = sliderTravellers.querySelector('.arrow_right');

    const renderDots = ()=> {
        const render = document.createElement('div');
        render.classList.add('slide_order');
        wrpaSlideOrder.insertAdjacentElement('beforeend', render);
    };

    const cycleRenderDots = ()=> {
        for(let i = 0; i < itemTreveller.length; i++){
            renderDots();
        }
    };
    cycleRenderDots();

    const slideOrder = wrapAllTrevellers.querySelectorAll('.slide_order');

    slideOrder[0].classList.add('active');

    const orderDotActive = (number)=> {
        slideOrder.forEach((item)=> {
            item.classList.remove('active');
        });
        
        slideOrder[number].classList.add('active');
    };

    let withWindow = 103.688;
    let showSlide = 1;
    let slidePosition = 0;

    const addActive = (num)=> {
        
        itemTreveller.forEach((item)=> {
            item.classList.remove('active');
        });
        itemTreveller[num].classList.add('active');
        orderDotActive(num);
    };

    const nextSlide = ()=> {
        slidePosition -= withWindow * showSlide;

        slidePosition = Math.max(slidePosition, -withWindow * (itemTreveller.length - showSlide));
        arrowLeft.style.visibility = 'visible';

        if(slidePosition === -withWindow * (itemTreveller.length - showSlide)){
            arrowRight.style.visibility = 'hidden';
        }

        allTrevellers.style.marginLeft = slidePosition + 'px';
        
        let slideActive = -(slidePosition / withWindow);
        addActive(slideActive);

    };

    const prevSlide = ()=> {
        slidePosition += Math.round(withWindow * showSlide);

        slidePosition = Math.min(slidePosition, 0);
        arrowRight.style.visibility = 'visible';

        if(slidePosition === 0){
            arrowLeft.style.visibility = 'hidden';
        }
        
        allTrevellers.style.marginLeft = slidePosition + 'px';
        
        let slideActive = -Math.round((slidePosition) / withWindow);
        addActive(slideActive);
    };

    arrowRight.addEventListener('click', nextSlide);
    arrowLeft.addEventListener('click', prevSlide);
};

export default travelersOverview;

