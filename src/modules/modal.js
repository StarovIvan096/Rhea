'use strict';

const openModal = ()=> {

    const callingModal = document.querySelectorAll('.calling_modal'),
        modal = document.getElementById('modal'),
        modalClose = document.getElementById('modal_close'),
        darkRange = document.getElementById('dark_range'),
        inputForm = document.querySelectorAll('.input_form'),
        modalWindow = document.querySelector('.modal_window');

    const inputValue = ()=> {
        inputForm.forEach((item)=> {
            item.value = '';
        });
    };

        callingModal.forEach((item)=> {
            item.addEventListener('click', ()=> {
                modal.style.visibility = 'visible';
                modalWindow.classList.add('active');

            });
        });

        modal.addEventListener('click', (item)=> {
            if(item.target.classList.contains('modal_close') || item.target.classList.contains('dark_range')){
                modalWindow.classList.remove('active');
                inputValue();
                modal.style.visibility = 'hidden';
            }

        });
    // modalClose.addEventListener('click', ()=> {
    //     modal.style.visibility = 'hidden';
    // });
};

export default openModal;