
(function () {
'use strict';
    $(document).ready(function () {

        var $title = $(".page-header").find('.title-name'),
            $toc = $("#toc"),
            $window = $(window);

        var positionToc = function () {
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
             $('html, body').stop().animate({
                 scrollTop: $toc.offset().top - tocHeight + 25
             }, delay,'easeInOutExpo');
        };

        $toc.popover({
            placement: "bottom",
            trigger: "manual",
            container: ".toc-section",
            animation: "false",
            html: true,
            content: $('#toc-content').html()
        });

        $toc.on('click', function (e) {
            e.preventDefault();
            positionToc();

           
            
            
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