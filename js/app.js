$(document).foundation();


$(document).ready(function () {
    var overlay = $('#overlay');
    var effect = "linear";

    $('.page-nav-btn').on('click', function () {
        overlay.fadeIn("slow", effect);
    });

    $('.close-btn').on('click', function () {
        overlay.fadeOut("fast", effect);
    });

    $('#overlay a').on('click', function () {
        overlay.fadeOut("fast", effect);
    });

    $('a[href*="#"]').on('click', function (e) {
        let target = $(this).attr('href');
        let speed = 1000;
        let nav = $('.side-nav-container').height();

        if ($(window).width() < 768) {
            $("html, body").stop().animate({
                    scrollTop: $(target).offset().top - nav
                },
                speed);
            e.preventDefault();
        } else {
            $("html, body").stop().animate({
                    scrollTop: $(target).offset().top
                },
                speed);
            e.preventDefault();
        }
    });
});