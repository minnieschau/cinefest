const swiper = new Swiper('.swiper', {
// Optional parameters
direction: 'horizontal',
speed: 750,

// If we need pagination
pagination: {
    el: '.swiper-pagination',
},

spaceBetween: 48,

// Navigation arrows
navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
},
});