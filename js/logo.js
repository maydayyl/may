var mySwiper = new Swiper('.swiper-container', {
    grabCursor: true,
    // init: false,
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    // autoplay: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    }
});
mySwiper.on('slideChange', function () {
    console.log(this.activeIndex);
})