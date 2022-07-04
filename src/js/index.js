import "../css/style.scss";
import $ from "jquery";
import "slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

$(".methods__list").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: false,
  //adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        arrows: false,
      },
    },
  ],
});

const mobilePopupOpen = document.querySelector(".total .total__detailed");
const totalPopup = document.querySelector(".checkout .checkout__right");
const popupCloseButton = document.querySelector(
  ".checkout .checkout__right .close__btn"
);

mobilePopupOpen.addEventListener("click", function () {
  totalPopup.classList.add("open");
});

popupCloseButton.addEventListener("click", function () {
  totalPopup.classList.remove("open");
});
