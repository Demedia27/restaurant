// Initialize Swiper
var swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true, // Set to true if you want the slides to loop continuously
    autoplay: {
      delay: 8000, // Autoplay delay in milliseconds
      disableOnInteraction: false, // Set to false if you want autoplay to continue even when user interacts with slider
    },
    pagination: {
      el: '.swiper-pagination', // Add pagination bullets
      clickable: true, // Allow clickable pagination bullets
    },
    navigation: {
      nextEl: '.swiper-button-next', // Next button
      prevEl: '.swiper-button-prev', // Previous button
    },
  });
  