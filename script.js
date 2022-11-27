window.addEventListener('scroll' , function () {
        document.querySelector("nav").classList.toggle("window-scrolled", window.scrollY > 0);
    })



// swiper js (gallery section)

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        599: {
            slidesPerView:2,
            spaceBetween: 40
        },

        1023:{
            slidesPerView: 3,
            spaceBetween:60
        }
    }
  });



const nav = document.querySelector(".nav__links");
const openNavBtn = document.querySelector("#nav__toggle-open");
const closeNavBtn = document.querySelector("#nav__toggle-close");


openNavBtn.addEventListener("click",function(){
    nav.style.display = "flex";
    openNavBtn.style.display = "none";
    closeNavBtn.style.display = "inline-block"
});


closeNavBtn.addEventListener("click",function(){
    nav.style.display = "none";
    openNavBtn.style.display = "inline-block";
    closeNavBtn.style.display = "none"
});


if(document.body.clientWidth < 1024){
    
nav.querySelectorAll("li a").forEach(function (navLink) {
    navLink.addEventListener("click", function () {
        nav.style.display = "none";
        openNavBtn.style.display = "inline-block";
        closeNavBtn.style.display = "none";
    });
});
}