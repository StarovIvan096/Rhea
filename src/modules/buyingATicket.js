'use strict';

const choiceDirection = ()=> {
    const dstinations = document.querySelector('.dstinations');
    const itemChoice = document.querySelector('.item_choice');
    const listCity = document.querySelector('.list_city');
    const itemChoiceValue = document.querySelector('.item_choice_value');
    const itemChoiceValueP = document.querySelector('.item_choice_value > p');
    const wrapPlug = document.querySelector('.wrap_plug');



    const render = (item)=> {
        const renderCity = document.createElement('li');
        renderCity.classList.add('list_item');
        renderCity.textContent = item;

        listCity.insertAdjacentElement('beforeend', renderCity);
    };



    dstinations.addEventListener('click' , (event)=> {
        const target = event.target;
        console.log(target);
    if(target.matches('.list_item')){
            itemChoiceValue.style.display = `block`;
            itemChoiceValueP.textContent = event.target.innerText;
        }
    });


    itemChoice.addEventListener('click', (event)=> {
        wrapPlug.style.display = 'none';

        if(dstinations.classList.contains('active')){
            dstinations.classList.remove('active');
            itemChoiceValue.style.display = `block`;
        } else {
            dstinations.classList.add('active');
            itemChoiceValue.style.display = `none`;
        }
    });

    const newDate = new Date();

    new AirDatepicker('#calendar',{
        minDate: `${newDate}`,
        autoClose: true,
    });


    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', ()=> {
        if(request.readyState !== 4){
            return;
        }

        if(request.status === 200){
            let listCity = request.responseText;
            listCity = JSON.parse(listCity);
            
            for(let item of listCity){
                render(item.city);
                
            }
        }
    });

    request.open('GET', './json/russia.json');
    request.setRequestHeader('Content-Type', 'application/json');
    request.send();
};

export default choiceDirection;



