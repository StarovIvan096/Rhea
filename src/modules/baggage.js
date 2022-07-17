'use strict';

const chocieBaggage = ()=> {
    const itemChoice = document.getElementById('item_choice_2');
    const wrapPackage = document.querySelector('.wrap_package');
    const wrapBaggage = document.querySelector('.wrap_baggage');
    const chosenBaggage = document.querySelector('.chosen_baggage');
    const chosenBaggageP = document.querySelector('.chosen_baggage > p');
    const itemChoice1 = document.getElementById('item_choice_2');
    const wrapPlug = itemChoice1.querySelector('.wrap_plug');


    const render = (item)=> {
        const renderCity = document.createElement('li');
        renderCity.classList.add('baggage');
        renderCity.textContent = item;

        wrapBaggage.insertAdjacentElement('beforeend', renderCity);
    };

    itemChoice.addEventListener('click', (event)=> {
        wrapPlug.style.display = 'none';
        chosenBaggage.style.display = 'none';
        chosenBaggageP.textContent = '';

        wrapPackage.classList.add('active');
        
        if(event.target.matches('.baggage')){
            wrapPackage.classList.remove('active');
            chosenBaggage.style.display = 'block';
            chosenBaggageP.textContent = event.target.innerText;
        }
    });




    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', ()=>{
        if(request.readyState !==4){
            return;
        }

        if(request.status === 200){
            let listBaggage = request.responseText;
            listBaggage = JSON.parse(listBaggage);

            for(let item of listBaggage){
                render(item.baggage);
            }
        }
    });

    request.open('GET', './json/family.json');
    request.setRequestHeader('Content-Type', 'application/json');
    request.send();
};

export default chocieBaggage;


