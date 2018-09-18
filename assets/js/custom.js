$(document).ready(function() {
    nowuiKit.initSliders();


    // Slick
    $('.product-display').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});


function scrollToIndex() {

    if ($('.index-page').length != 0) {
        $("html, body").animate({
            scrollTop: $('.index-page').offset().top
        }, 1000);
    }
}

function scrollToCareer() {

    if ($('.section-career').length != 0) {
        $("html, body").animate({
            scrollTop: $('.section-career').offset().top
        }, 1000);
    }
}

function scrollToProduct() {

    if ($('.section-product').length != 0) {
        $("html, body").animate({
            scrollTop: $('.section-product').offset().top
        }, 1000);
    }
}

function scrollToContact() {

    if ($('.section-contact').length != 0) {
        $("html, body").animate({
            scrollTop: $('.section-contact').offset().top
        }, 1000);
    }
}