function swiper(){
  var swiper = new Swiper(".mySwiper", {
    // spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
  });
}
swiper();
function pg5(){
  var tl = gsap.timeline();
  tl.to(".pg5-content h1",{
    y:-230,
    ease:Power2,
    duration:2,
    scrollTrigger:{
      trigger:".pg5-content",
      start:"top top",
      end:"top -10%",
      // pin:true,
      // markers:true,
      scrub:3,
    }
  })
  tl.to(".pg5-content",{
    height:"45vh",
    ease:"linear",
    delay:3,
    scrollTrigger:{
      trigger:".pg5-content",
      start:"top top",
      end:"top -10%",
      pin:true,
      // markers:true,
      scrub:3,
      onComplete:()=>{
        document.querySelector("footer").style.zIndex = 2; 
      }
    }
  })
}
pg5();