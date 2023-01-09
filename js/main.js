(function($) {
    "use strict";

   if ($.fn.classyNav) {
        $('#portfolionav').classyNav();
    }
    
    // nav scroll   
    var myoffset = $('#dtr-header-global').height();
    $('.navbar a[href^="#"]').click(function(){  
        event.preventDefault();  
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - myoffset
        }, "slow","easeInSine");
    });

    //stickyatTop
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 670) {
            $(".scrollheader").addClass("is-sticky");
            $('.scrollheader').css('position', 'fixed');
        } else {
            $(".scrollheader").removeClass("is-sticky");
            $(".scrollheader").css('position', 'absolute');
        }
    });

    if ($('.wow').length) {
        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 150, // distance to the element when triggering the animation (default is 0)
            mobile: true, // trigger animations on mobile devices (default is true)
            live: true // act on asynchronously loaded content (default is true)
        });
        wow.init();
    }

})(window.jQuery);