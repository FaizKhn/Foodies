$(document).ready(function () {
  // FOR STICKY NAVIGATION
  let $featureEleOffsetTop = $('#features').offset().top;
  let currentScroll;

  $(window).on('scroll', function () {
    currentScroll = $(this).scrollTop();
    if ($featureEleOffsetTop - 60 <= currentScroll) {
      $('#main-header nav').addClass('sticky-header');
    } else {
      $('#main-header nav').removeClass('sticky-header');
    }
  });

  // scroll on button
  $('.js--scroll-to-plan').on('click', function () {
    $('html,body').animate(
      {
        scrollTop: $('#plans').offset().top,
      },
      1000
    );
  });
  $('.js--scroll-to-start').on('click', function () {
    $('html,body').animate(
      {
        scrollTop: $('#features').offset().top,
      },
      1000
    );
  });

  // Navigation Scroll
  $(function () {
    $('a[href*=#]:not([href=#])').click(function () {
      if (
        location.pathname.replace(/^\//, '') ==
          this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate(
            {
              scrollTop: target.offset().top,
            },
            1000
          );
          return false;
        }
      }
    });
  });
  // mobile navigation
  $('.js--nav-icon').on('click', function () {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');
    nav.slideToggle(200);
    if (icon.hasClass('ion-navicon-round')) {
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
    } else {
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
    }
  });
});
