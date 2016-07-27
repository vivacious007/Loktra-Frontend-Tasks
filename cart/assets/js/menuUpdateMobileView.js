(function($){
  var $nav = $('nav-bar');

  $(window).on('load resize', function mobileViewUpdate(){
    var $windowWidth = $(window).width();

    if ($windowWidth < 768) {
      $nav.addClass('navbar-fixed-top');
    }else{
      $nav.removeClass('navbar-fixed-top');
    };
  });
})(jQuery);
