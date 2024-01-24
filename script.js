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
    loop:true,
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
  });
}
swiper();

function pg2(){
  gsap.from(".page2 h1",{
    y:145,
    ease:"ease",
    scrollTrigger:{
      trigger:".page2",
      start:"top top",
      end:"top -1%",
      // markers:true,
    }
  })
}
pg2()

function pg5(){
  var tl = gsap.timeline();
  tl.to(".pg5-content h1",{
    y:-230,
    ease:Power2,
    duration:1,
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
    delay:2,
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