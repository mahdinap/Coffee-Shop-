const menuOpenButton=document.querySelector("#menu-open-button")
const menuCloseButton=document.querySelector("#menu-close-button")
const body=document.body
const menu=document.querySelector(".navbar")

menuOpenButton.addEventListener("click",()=>{
  document.body.classList.toggle("show-mobile-menu")
})
menuCloseButton.addEventListener("click",()=>{
  menuOpenButton.click()
})

document.addEventListener("click",(e)=>{
  if(body.classList.contains("show-mobile-menu")){
    if(!menu.contains(e.target)){
      body.classList.remove("show-mobile-menu")
    }
    
  }
  
})
  




const swiper = new Swiper('.slider-wrapper', {
  loop:true,
  spaceBetween:25,
  grabCursor:true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamivBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints:{
    0:{
      slidesPerView:1
    },
    768:{
      slidesPerView:2
    },
    1024:{
      slidesPerView:3
    },
  }
});


const modal = document.querySelector(".image-modal")
const modalImg = document.querySelectorAll(".gallery-image");
const closeBtn = document.querySelector(".close");
const image=document.querySelector(".modal-image")

modalImg.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    image.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click",()=>{
  modal.style.display="none";
})