const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const buttons = document.querySelector('.slider__navigation')
const slides = document.querySelectorAll('.slide');
const slideIcons = document.querySelectorAll('.slide-icon');
const numberOfSlide = slides.length;
let slideNumber = 0;

//Slider next button

nextBtn.addEventListener('click', () => {
   slides.forEach((slide) => {
      slide.classList.remove('active');
   });

   slideIcons.forEach((slideIcons) => {
      slideIcons.classList.remove('active');
   });

   slideNumber++;

   if(slideNumber > (numberOfSlide - 1)){
      slideNumber = 0;
   }

   slides[slideNumber].classList.add('active');
   slideIcons[slideNumber].classList.add('active');
})

//Slider previous button

prevBtn.addEventListener('click', () => {
   slides.forEach((slide) => {
      slide.classList.remove('active');
   });

   slideIcons.forEach((slideIcons) => {
      slideIcons.classList.remove('active');
   });

   slideNumber--;

   if(slideNumber < 0){
      slideNumber = numberOfSlide - 1;
   }

   slides[slideNumber].classList.add('active');
   slideIcons[slideNumber].classList.add('active');
})

//Slider autoplay

let playSlider;

let repeater = () => {
   playSlider = setInterval(function(){
      slides.forEach((slide) => {
         slide.classList.remove('active');
      });
   
      slideIcons.forEach((slideIcons) => {
         slideIcons.classList.remove('active');
      });
   
      slideNumber++;
   
      if(slideNumber > (numberOfSlide - 1)){
         slideNumber = 0;
      }
   
      slides[slideNumber].classList.add('active');
      slideIcons[slideNumber].classList.add('active');
   }, 4000);
}

repeater();

buttons.addEventListener('mouseover', () => {
   clearInterval(playSlider);
});

buttons.addEventListener('mouseout', () => {
   repeater();
});