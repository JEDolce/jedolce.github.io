$(document).ready(function () {
    $('.carousel').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        centerMode: true,
        responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 380,
            settings: {
                slidesToShow: 2
            }
        }]

        // https://codepen.io/swetankrathi/pen/OyRZxL
        // https://www.youtube.com/watch?v=VcbMz39IZNY
    });
});