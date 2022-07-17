'use strict';

const travelMethod = ()=> {
    const availableCategories = document.querySelector('.available_categories');
    const itemCategory = document.querySelectorAll('.item_category');
    const prev = document.querySelector('.left');
    const next = document.querySelector('.next');


    let withWindow = 300;
    let showSlide = 4;

    let slidePosition = 0;

    prev.style.visibility = 'hidden';

    const nextButton = ()=> {
        slidePosition -= withWindow * showSlide; 
        
        slidePosition = Math.max(slidePosition, -withWindow * (itemCategory.length - showSlide));
        prev.style.visibility = 'visible';

        if(slidePosition === -withWindow * (itemCategory.length - showSlide)){
            next.style.visibility = 'hidden';
        }

        availableCategories.style.marginLeft = slidePosition + 'px';
    };

    const prevButton = ()=> {
        slidePosition += withWindow * showSlide; 
        next.style.visibility = 'visible';
        
        slidePosition = Math.min(slidePosition, 0);
        
        if(slidePosition === 0){
            prev.style.visibility = 'hidden';
        }

        availableCategories.style.marginLeft = slidePosition + 'px';
    };

    prev.addEventListener('click', prevButton);
    next.addEventListener('click', nextButton);
};

export default travelMethod;

