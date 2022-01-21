import Swiper, {Autoplay} from 'swiper';
import 'swiper/css/bundle';
Swiper.use([Autoplay]);

import './main.scss'

//NavBar BTN
let NavBtn = document.querySelector('.menu__toggle a');
let Hamburger = document.querySelector('.hamburger');

NavBtn.addEventListener('click', () => {
    Hamburger.style.display = 'block';
    Hamburger.classList.toggle('open');
    if (!Hamburger.classList.contains('open')) {
        Hamburger.style.display = 'none';
    }
});


//NavBar Scroll
let Nav = document.querySelector('.Nav');
let imgNav = document.querySelector('.logo img');

window.onscroll = () => {
    "use strict";
    if(document.body.scrollTop >= 100 | document.documentElement.scrollTop >= 100) {
        Nav.classList.add('colored');
        Nav.classList.remove('transparent');
    } else {
        Nav.classList.add('transparent');
        Nav.classList.remove('colored');
    }
};


//Swiper 

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 10000,
      disableOnInteraction: true,
    },
    loop: true,
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    }
  });

// Modal
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})
