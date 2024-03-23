function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      }, 
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      
    });
  
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    ScrollTrigger.refresh();
}
locomotiveAnimation();

// function navbarAnimation() {
//     gsap.to(".nav a", {
//       transform: "translateY(-100%)",
//       scrollTrigger: {
//         trigger: ".page1",
//         scroller: ".main",
//         start: "top 0",
//         end: "top -10%",
//         scrub: true,
//       },
//     });
// }
// navbarAnimation()

function loadingAnimation(){
    // gsap.from(".page1 .pleft h1", {
    //     y: 100,
    //     opacity : 0,
    //     delay: 0.2,
    //     stagger: 0.2,
    //     duration: 1
    //     // scrub : 2
    // })
    gsap.from(".page1 .pright", {
        y: 300,
        scale: 0.8,
        opacity : 0,
        delay: 0.5,
        duration: 1 
    })
}
loadingAnimation()

function swiperAnimation() {
  let swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      // centeredSlides: true,
      spaceBetween: 100,
  });
}
swiperAnimation()

function swiper2Animation(){
  let swiper = new Swiper(".swiper2", {
    slidesPerView: "auto",
    // centeredSlides: true,
    spaceBetween: 20,
});
}
swiper2Animation()

function imageAnime(){

}
imageAnime()

let slides = document.querySelectorAll(".slide")
let counter= 0;
slides.forEach(
  (slide, index)=>{
    slide.style.left= `${index*100}%`
  }
)
// const goprev= ()=>{
//   counter--;
//   slideImg();
// }
// const gonext= ()=>{
//   counter++;
//   slideImg();
// }
const gonext = () => {
  if (counter < slides.length - 1) {
  counter++;
  slideImg();
  }
  };
  const goprev = () => {
  if (counter != 0) {
  counter--;
  slideImg();
  }
  };
const slideImg = ()=>{
  slides.forEach((slide)=>{
    slide.style.transform = `translateX(-${counter*100}%)`
  })
}







