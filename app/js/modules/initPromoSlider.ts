import { Pagination, EffectCreative } from "swiper/modules";
import Swiper from "swiper";

export const initPromoSlider = () => {
  new Swiper(".promo .swiper", {
    modules: [Pagination, EffectCreative],
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".promo .swiper-pagination",
      clickable: true,
    },
    effect: "creative",
    creativeEffect: {
      prev: {
        translate: ["-20%", 0, -1],
      },
      next: {
        translate: ["80%", 0, 0],
        opacity: 0.3,
        scale: 0.2,
      },
    },
  });
};
