










// class SLIDER {
//     constructor(options) {
//         this.slider = document.querySelector(options.slider);
//         this.sliderLine = this.slider.querySelector('.slider__line');
//         this.slides = this.sliderLine.children;

//         this.sliderControls = this.slider.querySelector('.slider__controls');
//         this.sliderControlsBtn = this.sliderControls.children;

//         this.buttonArray = [];

//         // this.prev = document.querySelector('.slider__prev');
//         // this.next = document.querySelector('.slider__next');

//         this.activeSlide = 0;
//         this.moveUnit = 60;
//         this.gutters = 50;

//         for (let i = 0; i < this.slides.length; i++) {
//             const currentSlide = this.slides[i];

//             if (i === this.slides.length - 1) {
//                 currentSlide.style.transform = `translateX(-${this.gutters}%)`;
//             } else {
//                 currentSlide.style.transform = `translateX(${(i + 1) * this.moveUnit + i * this.gutters}%)`;
//             }

//             // if (i != this.activeSlide) {
//             //     currentSlide.style.transform = `translateX(${this.moveUnit}%)`;
//             // }


//             // if (i === this.slides.length - 1) {
//             //     currentSlide.style.transform = `translateX(-${this.gutters}%)`;
//             // } else {
//             //     currentSlide.style.transform = `translateX(${(i + 1) * this.moveUnit + i * this.gutters}%)`;
//             // }

//         }

//         for (let i = 0; i < this.slides.length; i++) {
//             this.sliderControls.insertAdjacentHTML('afterbegin', '<button class="slide-btn">&bull;</button>');
//         }


//         for (let i = 0; i < this.sliderControlsBtn.length; i++) {
//             if (i == this.activeSlide) {
//                 this.sliderControlsBtn[i].classList.add('active')
//             }

//             this.sliderControlsBtn[i].addEventListener('click', () => this.move(this.sliderControlsBtn[i], i));

//         }



//     }



//     move(btn, currentIndex) {


//         btn.addEventListener('click', () => {


//             for (let i = currentIndex; i < this.slides.length; i++) {
//                 if (i > currentIndex) {
//                     console.log(i);
//                     console.log('work 1');
//                     for (let k = currentIndex; k < this.slides.length; k++) {
//                         this.slides[i].style.transform = `translateX(${170})%`;
//                         this.slides[k].style.transform = `translateX(${280}%)`;
//                     }
//                 } else {
//                     console.log('work 2');
//                     console.log(i);
//                 }
//             }





//             for (let i = 0; i < currentIndex; i++) {
//                 // this.slides[i].style.transform = `translate(-${this.moveUnit}%`; 

//                 if (i > 0) {
//                     for (let k = 0; k < currentIndex; k++) {
//                         this.slides[k].style.transform = `translateX(${(currentIndex + 1) * this.moveUnit + (currentIndex) * this.gutters}%)`;
//                         this.slides[i].style.transform = `translateX(-${this.gutters}%)`;

//                     }
//                 } else {
//                     this.slides[i].style.transform = `translateX(-${this.gutters}%)`;
//                 }


//             }

//             // for (let i = 0; i < currentIndex; i++) {
//             //     if (i != 0) {
//             //         this.slides[i].style.transform = `translateX(${(i + 1) * this.moveUnit + i * this.gutters}%)`;

//             //     } else {
//             //         this.slides[i].style.transform = `translateX(-${this.gutters}%)`;
//             //         console.log(i);
//             //         console.log(i + 1);
//             //         console.log(currentIndex);
//             //     }
//             // }





//             this.slides[currentIndex].style.transform = 'translate(60%)';
//             this.slides[currentIndex].style.transition = '0.5s';
//             this.activeSlide = currentIndex;

//             // if (i === this.slides.length - 1) {
//             //     currentSlide.style.transform = `translateX(-${this.gutters}%)`;
//             // } else {
//             //     currentSlide.style.transform = `translateX(${(i + 1) * this.moveUnit + i * this.gutters}%)`;
//             // }
//         })
//     }




//     //     }

//     // //     move(btn) {
//     // //         let LeftOrRightBTN = btn == this.next ? this.moveUnit * -1 : this.moveUnit;

//     // //         for (let i = 0; i < this.slides.length; i++) {
//     // //             let currentSlide = this.slides[i];
//     // //             currentSlide.style.transition = '0ms';
//     // //             if (currentSlide != this.activeSlide) {
//     // //                 currentSlide.style.transform = `translateX(${LeftOrRightBTN * -1}%)`
//     // //             }
//     // //         }


//     // //         this.slides[this.activeSlide].style = `transform: translateX(${LeftOrRightBTN}%)`
//     // //         this.slides[this.activeSlide].style.transition = '500ms'


//     // //         if (btn == this.next) {
//     // //             this.activeSlide++;
//     // //             if (this.activeSlide > this.slides.length - 1) {
//     // //                 this.activeSlide = 0;
//     // //             }
//     // //         } else if (btn == this.prev) {
//     // //             this.activeSlide--;
//     // //             if (this.activeSlide < 0) {
//     // //                 this.activeSlide = this.slides.length - 1;
//     // //             }
//     // //         }

//     // //         this.slides[this.activeSlide].style.transform = `translateX(${0})`
//     // //         this.slides[this.activeSlide].style.transition = '500ms'

//     // }

// }

// const sliderNum1 = new SLIDER({
//     slider: '.slider',
// })