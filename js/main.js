/*    Menu Section   */
let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.menu');
let bell = document.querySelector('.notification');
let bellIcon = document.querySelector('#bell-icon');

menu.onclick = () => {
    menu.classList.toggle('move');
    navbar.classList.toggle('active');
    bell.classList.remove('active');
    
};

navbar.onclick= () => {
  navbar.classList.remove('active'); 
  menu.classList.remove('move');
};

bellIcon.onclick = () => {
    bell.classList.toggle('active');
};



/*    Home Section   */
var home = new Swiper(".home-slider", {
  grabCursor:true,
  loop:true,
  centeredSlides:true,  
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



/*    Trending Section   */
var trend = new Swiper(".trending-content", {
  loop:true,
  grabCursor:true,
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
      delay: 5000,
      disableOnInteration: false,
  },
  breakpoints: {
    360:{
      slidesPerView : 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
    560:{
      slidesPerView : 2,
      slidesPerGroup: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
    },
    1068: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 25,
    },
    1200: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 25,
    },
  },
});



/*    Review Section   */
var swiper2 = new Swiper(".review-content", {
  slidesPerView: 3,
  spaceBetween: 5,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 7000,
    disableOnInteration: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    360:{
      slidesPerView : 1,
      slidesPerGroup: 1,
    },
    560:{
      slidesPerView : 1,
      slidesPerGroup: 1,
    },
    768:{
      slidesPerView : 2,
      slidesPerGroup: 2,
    },
    991:{
      slidesPerView : 3,
      slidesPerGroup: 3,
      spaceBetween: 60,
    },
    1200:{
      slidesPerView : 3,
      slidesPerGroup: 3,
      spaceBetween: 60,
    },
  },
});



/*    Load More Button Section   */
let loadBtn = document.querySelector('.load-more .btn');
let currentItem = 5;

loadBtn.onclick = () =>{
  let boxes = [...document.querySelectorAll(".new .new-content .box")];
  console.log(boxes.length);
  for(var i = currentItem ; i < currentItem + 5 ; i++){
    boxes[i].style.display = 'inline-block';
  };

  currentItem += 5;
  if(currentItem >= boxes.length){
    loadBtn.style.display = 'none';
  }
};