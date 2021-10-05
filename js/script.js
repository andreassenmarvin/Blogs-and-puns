const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })

    // owl-crousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });

    //Read more toggle
    $("#photo-blog-toggle").hide();

    $("#photo-blog-btn").click(function () {
        $("#photo-blog-toggle").fadeToggle();
    })

    $("#road-blog-toggle").hide();

    $("#road-blog-btn").click(function () {
        $("#road-blog-toggle").fadeToggle();
    })

    $("#marine-blog-toggle").hide();

    $("#marine-blog-btn").click(function () {
        $("#marine-blog-toggle").fadeToggle();
    })

    //Subscribe form
    $("#subscribe-success").hide();

    $(".subscribe-form").submit(function (event) {
        event.preventDefault();
        $("#subscribe-success").fadeIn();
    });

    // click to scroll top
    $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

    // AOS Instance
    AOS.init();

});