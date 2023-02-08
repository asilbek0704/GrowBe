let icons = document.querySelectorAll('.team-cards__card-icons'),
    cardName = document.querySelectorAll('.team-cards__card-name');




for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener('mouseover', (e) => {
        let target = e.target;


        // if (target.classList.contains('social-icon')) {
        if (target.classList.contains('social-icon')) {
            cardName[i].style.color = target.getAttribute('data-bgColor');

        }


    })

    icons[i].addEventListener('mouseleave', () => {
        cardName[i].style.color = 'black'
    })
    
}