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

    // Particles
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 123,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "FFFFFF"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#FFFFFF"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "FFFFFF",
                "opacity": 0.5,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 4,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "repulse"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 231,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 231,
                    "size": 12,
                    "duration": 1.542946703372556,
                    "opacity": 0.9,
                    "speed": 3
                },
                "repulse": {
                    "distance": 231,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    // Typed JS
    $(".skilltechtypetext").typed({
        // This is were you need to change the text
        strings: sentences,
        contentType: 'html',
        typeSpeed: 30,
        loop: true,
        backDelay: 1200,
        showCursor: true,
        cursorChar: "|"
    });

})(jQuery);

"use strict";
// YouTube
// This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//  This function creates an <iframe> (and YouTube player)
//   after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('yt-player', {
        // This is where you paste video's ID
        videoId: videoId,
        playerVars: {
            'autoplay': 1,
            'controls': 0,
            'autohide':1,
            'enablejsapi':1,
            'loop':1,
            'disablekb':1,
            'fs': 0,
            'modestbranding': 0,
            'showinfo': 0,
            'color': 'white',
            'theme': 'dark',
            'rel':0
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}
// The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
    player.mute();
    player.setVolume(0);
    player.setLoop(true);
}
// The API will call this function when the video player's state changes.
function onPlayerStateChange(event) {
    if (event.data === 0) {
        player.playVideo();
    }
}




