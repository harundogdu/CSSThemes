$(document).ready(function () {

    /* navbar */
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $(".btn-scroll-top").addClass("show");
        } else {
            $(".btn-scroll-top").removeClass("show");
        }
    });

    // slide-up script
    $('.btn-scroll-top').click(function () {
        $('html').animate({
            scrollTop: 0
        });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "smooth");
    });

    /* typed */
    var typed = new Typed('.typed', {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 80,
        loop: true
    });
    var typed = new Typed('.typed-2', {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 80,
        loop: true
    });


    /* owl carousel */
    $(".carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

    /* menu btn */

    $(".menu-btn").click(function (e) { 
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $(".menu-btns").click(function (e) { 
        $('.navbar .menu').removeClass("active");
    });

});