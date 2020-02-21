(function($) {
  'use strict'; // Start of use strict

  // Toggle Social Button
  $('.social-icons .btn-social').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('.social-icons .icon').fadeToggle(500, 'linear');
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate(
          {
            scrollTop: target.offset().top,
          },
          500,
          'easeInOutExpo',
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
    if ($('.burger').hasClass('active')) $('.burger').removeClass('active');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav',
  });

  // Change Burger icon to X when clicked
  $('.burger').click(function(e) {
    $('.burger').toggleClass('active');
  });
})(jQuery); // End of use strict

AOS.init({
  easing: 'ease',
  duration: 1000,
  once: true,
});
