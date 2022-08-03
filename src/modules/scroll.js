'use strict';

const playVideo = ()=> {
    const videoSlider = document.querySelector('.video_slider');
    const listVideo = document.querySelector('.list_video');
    const listVideoUl = document.querySelector('.list_video > ul');
    const itemSlide = document.querySelectorAll('.item_slide');


    const renderVideo = (link = 1)=> {
        const render = document.createElement('div');
        render.classList.add('another_video');
        render.innerHTML = `<video src="./video/${link}.mp4" class="video_block" controls></video>`;      

        videoSlider.insertAdjacentElement('afterbegin', render);
    };

    renderVideo();

    const deleteVideo = ()=> {
        const deleteV = document.querySelector('.another_video');
        deleteV.remove();
    };


    listVideoUl.addEventListener('click', (event)=> {

        const target = event.target;
        const item = target.closest('.item_slide');

        if(item){
            itemSlide.forEach((item, num)=> {
                item.classList.remove('active');
            });
            item.
            classList.add('active');
        }
        deleteVideo();
        renderVideo(item.id);
        
    });    
};

export default playVideo;

