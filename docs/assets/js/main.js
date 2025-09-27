/*  Minimal main.js (no mobile nav panel)
    Keeps preload removal + optional Dropotron init
    Compatible with custom mobile nav in index.html + navigation.js
*/

(function ($) {
  var $window = $(window),
      $body = $('body');

  // Breakpoints (requires breakpoints.min.js already included)
  if (typeof breakpoints === 'function') {
    breakpoints({
      xlarge: ['1281px', '1680px'],
      large:  ['981px',  '1280px'],
      medium: ['737px',  '980px' ],
      small:  [null,     '736px' ]
    });
  }

  // Play initial animations on page load (remove is-preload)
  $window.on('load', function () {
    window.setTimeout(function () {
      $body.removeClass('is-preload');
    }, 100);
  });

  // Desktop dropdown menus (only if Dropotron is loaded)
  if ($.fn && $.fn.dropotron) {
    $('#nav > ul').dropotron({
      mode: 'fade',
      noOpenerFade: true,
      alignment: 'center'
    });
  }

  // NOTE: No mobile #titleBar/#navPanel creation here (handled in index.html + navigation.js)
})(jQuery);
