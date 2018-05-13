$(document).ready(function () {
    $('.slider').slick({
        draggable: false,
        mobileFirst: true,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                arrows: true,
                autoplay: false
            }
        }]
    });
});