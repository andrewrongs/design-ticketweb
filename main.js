import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

// swiper
import Swiper from 'https://esm.sh/swiper@10/swiper-bundle.min.js';
// aos
import aos from "https://esm.sh/aos@2.3.1";
aos.init();

const swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    allowTouchMove: false,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    loot: true,
    speed: 8000
  });
  
  const swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: "auto",
    allowTouchMove: false,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    loot: true,
    speed: 10000
  });