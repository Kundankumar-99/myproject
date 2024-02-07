// This is script file

$('.testimonials-container').owlCarousel({
    loop:true,
    autoplay:false,
    autoplayTimeout:6000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:true,
            animateOut: 'fadeOut', // Add smooth fade-out animation
            animateIn: 'fadeIn',
            onTranslate: startAnimation
        },
        768:{
            items:1
        },
    }
});
function startAnimation(event) {
    // Introduce a delay of 500ms (adjust as needed)
    setTimeout(function () {
        $('.owl-item.active .testimonial-item').addClass('animated'); // Add your animation class
    }, 500);
}

