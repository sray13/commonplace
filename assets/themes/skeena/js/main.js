
(function () {
'use strict';
    $(document).ready(function () {

        var $title = $(".page-header").find('.title-name'),
            $toc = $("#toc"),
            $window = $(window);

        $toc.popover({
            placement: "bottom",
            trigger: "manual",
            container: ".toc-section"
        });

        $toc.on('click', function (e) {
            var delay = 1000, $popover, tocHeight;
            
            $toc.popover('toggle');
            $popover = $('.toc-section').find('.popover');
            $popover.find('.arrow').position({
               of: $toc,
               my: 'bottom center',
               at: 'bottom'
             });
            tocHeight = $popover.closest('.toc-section').height()
            $popover.height($popover.closest('.section').height() - tocHeight);
            e.preventDefault();
            
            
            $('html, body').stop().animate({
                 scrollTop: $toc.offset().top - tocHeight + 25
             }, delay,'easeInOutExpo');
            
            
        });

        $(window).on('scroll', function () {
            if ($window.scrollTop() > 64) {
                $title.addClass('static-nav');
            } else if ($window.scrollTop() < $title.offset().top) {
                $title.removeClass('static-nav')
            }
        });    
    });
})();