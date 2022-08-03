'use strict';

const keyPressing = ()=> {
    const inputForm = document.getElementById('input_email'),
        succesKey = RegExp('^\w*\@\w*\.\w{2,3}');
    
    inputForm.addEventListener('blur', (event)=> {
        console.log(event.target.value);
    });
};
export default keyPressing;