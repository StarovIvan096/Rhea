'use strict';

const choiceTicket = ()=> {
    const wrapItemVoucher = document.querySelectorAll('.wrap_item_voucher');
    const arrowLeft = document.querySelector('.arrow_left');
    const arrowRight = document.querySelector('.arrow_right');
    let showImg = 0;


    const removeClass = ()=> {
        wrapItemVoucher.forEach((item)=> {
            item.classList.remove('active');
        });
    };

    const nextImg = ()=> {
        removeClass();
        if(showImg < wrapItemVoucher.length - 1){
            ++showImg;
            wrapItemVoucher[showImg].classList.add('active');
        } else {
            showImg = 0;
            wrapItemVoucher[showImg].classList.add('active');
        }
        console.log(typeof showImg);
    };

    const prevImg = ()=> {
        removeClass();
        if(showImg !== 0){
            --showImg;
            wrapItemVoucher[showImg].classList.add('active');
        } else {
            showImg = wrapItemVoucher.length - 1;
            wrapItemVoucher[showImg].classList.add('active');
        }
    };
    prevImg();

        let render = document.createElement('div');
        render.classList.add('rating');
        render.innerHTML = `<div class="stars_rating">
                                <img src="./assets/картинки/1 слайдер/star.png" alt="" class="star">
                                <img src="./assets/картинки/1 слайдер/star.png" alt="" class="star">
                                <img src="./assets/картинки/1 слайдер/star.png" alt="" class="star">
                                <img src="./assets/картинки/1 слайдер/star.png" alt="" class="star">
                                <img src="./assets/картинки/1 слайдер/star-regular.png" alt="" class="star">
                                </div>
                                <div class="wrap_days">
                                <div class="tour_days">
                                    <p class="tour">3 days tour</p>
                                </div>
                            </div>`;  
        

    const searchClassActive = ()=> {
        render.remove();
        wrapItemVoucher.forEach((item)=> {
            if(item.classList.contains('active')){
                item.insertAdjacentElement('beforeend', render);    
            }
        });
    };
    // searchClassActive();

    const showAndAssignClass = ()=> {
        nextImg();
        searchClassActive();
    };

    const showSlidePrev = ()=> {
    prevImg();
        searchClassActive();
    };

    arrowRight.addEventListener('click', showAndAssignClass);
    arrowLeft.addEventListener('click', showSlidePrev);    
};

export default choiceTicket;
