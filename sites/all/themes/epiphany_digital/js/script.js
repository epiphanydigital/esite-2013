(function ($) {

  Drupal.behaviors.epiphany_digital = {
    attach: function (context, settings) {
      $('#logo-hover',context).removeClass('hover');
      $('.logo-img',context)
        .hover(
            function() {
                $(this).find('.default').animate({
                    opacity:0,
                    left:-10,
                    easing:'easeOutBounce'
                },400);
                $(this).find('#logo-hover').animate({
                    left: 0,
                    opacity:1,
                    easing:'easeOutBounce'
                },150);
            },
            function() {
                $(this).find('.default').animate({
                    opacity:1,
                    left:0,
                    easing:'easeOutBounce'
                },400);
                $(this).find('#logo-hover').animate({
                    left: -506,
                    opacity: 0,
                    easing:'easeOutBounce'
                },150);
            }
        );
              
    }
  };

})(jQuery);