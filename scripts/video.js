const watchBtn = document.querySelector('.watch'),
        VideoOverlay = document.querySelector('.header .overlay'),
        video = document.querySelector('.header .overlay .video');


const btnOpen = () => {
    VideoOverlay.classList.remove('hidden');
    video.play();
    
}

const btnClose = () => {
    VideoOverlay.classList.add('hidden');
    video.pause()
}


watchBtn.addEventListener('click', btnOpen);

VideoOverlay.addEventListener('click', (e) => {
    let target = e.target;

    if (target.classList.contains('close') || target.classList.contains('overlay')) {
        btnClose();
    }
})
