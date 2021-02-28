var mySwiper = new Swiper('.box', {
    // grabCursor: true,
    // init: false,
    effect:'fade',
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    // autoplay: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});
mySwiper.on('slideChange', function () {
    console.log(this.activeIndex);
})