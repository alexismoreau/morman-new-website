// Main Particle Theme JS
(function ($) {
    "use strict";
    // Navbar
    // browser window scroll (in pixels) after which the "menu" link is shown
    var offset = 300;

    var navigationContainer = $('#st-nav'),
        mainNavigation = navigationContainer.find('#st-main-nav ul');

    //hide or show the "menu" link
    checkMenu();
    $(window).scroll(function () {
        checkMenu();
    });

    //open or close the menu clicking on the bottom "menu" link
    $('.st-nav-trigger').on('click', function () {
        $(this).toggleClass('menu-is-open');
        //we need to remove the transitionEnd event handler (we add it when scolling up with the menu open)
        mainNavigation.off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend').toggleClass('is-visible');

    });

    function checkMenu() {
        if ($(window).scrollTop() > offset && !navigationContainer.hasClass('is-fixed')) {
            navigationContainer.addClass('is-fixed').find('.st-nav-trigger').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
                mainNavigation.addClass('has-transitions');
            });
        } else if ($(window).scrollTop() <= offset) {
            //check if the menu is open when scrolling up
            if (mainNavigation.hasClass('is-visible') && !$('html').hasClass('no-csstransitions')) {
                //close the menu with animation
                mainNavigation.addClass('is-hidden').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                    //wait for the menu to be closed and do the rest
                    mainNavigation.removeClass('is-visible is-hidden has-transitions');
                    navigationContainer.removeClass('is-fixed');
                    $('.st-nav-trigger').removeClass('menu-is-open');
                });
                //check if the menu is open when scrolling up - fallback if transitions are not supported
            } else if (mainNavigation.hasClass('is-visible') && $('html').hasClass('no-csstransitions')) {
                mainNavigation.removeClass('is-visible has-transitions');
                navigationContainer.removeClass('is-fixed');
                $('.st-nav-trigger').removeClass('menu-is-open');
                //scrolling up with menu closed
            } else {
                navigationContainer.removeClass('is-fixed');
                mainNavigation.removeClass('has-transitions');
            }
        }
    }

    // WOW Init
    new WOW().init();

    // Scrolling Navigation
    $(function () {
        $('a.page-scroll').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    // Counter Up Init
    $('.counter').counterUp({
        delay: 20,
        time: 2200
    });
    
    setTimeout(function(){
        document.getElementById('serv1').style.visibility = "visible";
    },1000);
  
    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 2600) {
          document.getElementById('service1').style.visibility = "visible";
        } else {
          document.getElementById('service1').style.visibility = "hidden";
        }
        if (y > 2700) {
          document.getElementById('service3').style.visibility = "visible";
        } else {
          document.getElementById('service3').style.visibility = "hidden";
        }
        if (y > 2800) {
          document.getElementById('service2').style.visibility = "visible";
        } else {
          document.getElementById('service2').style.visibility = "hidden";
        }
        if (y > 2900) {
          document.getElementById('service4').style.visibility = "visible";
        } else {
          document.getElementById('service4').style.visibility = "hidden";
        }
      });


})(jQuery);