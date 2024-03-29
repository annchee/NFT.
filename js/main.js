/* Menu section*/
let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.menu-side');
let bell = document.querySelector('.notification');
let bellIcon = document.querySelector('#bell-icon');
let nav = document.querySelector('nav');

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

window.onscroll = () =>{
    navbar.classList.remove('active'); 
    menu.classList.remove('move');
    nav.classList.toggle('window-scroll', window.scrollY > 0);
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


/* Trending Section */
var swiper = new Swiper(".trending-content", {
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
            slidesPerView : 2,
            slidesPerGroup: 2,
            spaceBetween: 10,
        },
        560:{
            slidesPerView : 2,
            slidesPerGroup: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 10,
        },
        991: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 10,
        }
    }
});


/*    Load More Button Section   */
let loadBtn = document.querySelector('.load-more .btn');
var tempCurrentItem;

if(window.innerWidth > 768){
  tempCurrentItem = 3;
}else{
  tempCurrentItem = 2;
}

let currentItem = tempCurrentItem;

loadBtn.onclick = () =>{
    let boxes = [...document.querySelectorAll('.new-box')];
  
    console.log(tempCurrentItem);
    for(var i = currentItem ; i < currentItem + tempCurrentItem ; i ++){
      if(i < boxes.length){
        boxes[i].style.display = 'inline-block';
      }
    };

    currentItem += tempCurrentItem;

    if(currentItem >= boxes.length){
      loadBtn.style.display = 'none';
    }
};


/*    Review Section   */
var swiper2 = new Swiper(".review-swiper", {
    slidesPerView: 1,
    spaceBetween: 5,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 7000,
      disableOnInteration: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
  
    breakpoints:{
      600:{
        slidesPerView : 2,
        slidesPerGroup: 2,
      },
      768:{
        slidesPerView : 2,
        slidesPerGroup: 2,
      },
      1024:{
        slidesPerView : 3,
        slidesPerGroup: 3,
      },
    },
});
