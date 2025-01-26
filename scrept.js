let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navibar.classList.remove('active');
}
let navibar = document.querySelector('.navibar');

document.querySelector('#menu-btn').onclick = () =>{
    navibar.classList.toggle('active');
    searchForm.classList.remove('active');
    
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    navibar.classList.remove('active');
}
let filter = document.querySelectorAll('.filter-btn .buttons');
let filteritem = document.querySelectorAll('.products .box-container .box');

filter.forEach(button =>{
  button.onclick =()=>{
    filter.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active')

    let dataFilter = button.getAttribute('data-filter');

    filteritem.forEach(item =>{
      item.classList.remove('active');
      item.classList.add('hide')

      if(item.getAttribute('data-item') == dataFilter || dataFilter == 'all'){
        item.classList.remove('hide');
      item.classList.add('active')
      }
    });
  }
})
var swiper = new Swiper(".home-slider", {
    
      centeredSlides: true,
      loop:true,
    autoplay: {
        delay: 6500,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".featured-slider", {
    
    centeredSlides: true,
    loop:true,
    spaceBetween:20,
  autoplay: {
      delay: 6500,
      disableOnInteraction: false,
    },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
    
});

  