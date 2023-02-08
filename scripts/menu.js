const burgerMenu = document.querySelector('.burgerMenu'),
    navOverlay = document.querySelector('.nav-overlay');


const menuOpen = () => {
    navOverlay.classList.remove('hidden');

}

const menuClose = () => {
    navOverlay.classList.add('hidden');
}


burgerMenu.addEventListener('click', menuOpen);

navOverlay.addEventListener('click', (e) => {
    let target = e.target;

    if (target.classList.contains('close') || target.classList.contains('nav-overlay')) {
        menuClose();
    }
})