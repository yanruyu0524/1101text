$('.list').on('click', 'li', function() {
    $(this).addClass("active").siblings().removeClass("active");
    var ind = $(this).index();
    swiper.slideTo(ind, 1000)

});
var swiper = new Swiper('.swiper-container');