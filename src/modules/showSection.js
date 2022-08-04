'use strict';

const showSection = ()=> {
    const arrowUp = document.querySelector('.arrow_up');
    
    const hideArrow = ()=> {
        window.addEventListener('scroll', ()=> {
            
            if(window.scrollY < 550){
                arrowUp.style.display = 'none';
            } else if(window.scrollY > 850){
                arrowUp.style.display = 'block';
            }
        }); 
    };
    hideArrow();

    const scrollSection = (event)=> {
        event.preventDefault();

        let linkId = event.target.getAttribute('href');

        if(event.target.classList.contains('arrow_up')){
            linkId = '.header';
            hideArrow();
        }

        document.querySelector(linkId).scrollIntoView({
            behavior: 'smooth',
            block:'start'
        });     
    };  

    arrowUp.addEventListener('click', scrollSection);
};

export default showSection;

