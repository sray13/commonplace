
(function () {
'use strict';
    var mySwiper;
    window.onload = function() {
        var $masthead = $('.masthead');
        mySwiper = new Swiper('.swiper-container',{
            mode:'vertical',
            loop: true,
            simulateTouch: true,
            mousewheelControl: true,
            grabCursor: true,
            onSlideChangeStart: function (swiper) {
               if (swiper.activeIndex !== 0) {
                    $masthead.removeClass('hidden');
                } else {
                    $masthead.addClass('hidden');
                }
            }
        });
    };



    $(document).ready(function () {

        var $title = $(".page-header").find('.title-name'),
            $toc = $("#toc"),
            $window = $(window);

        $toc.popover({
            placement: "bottom",
            trigger: "manual",
            container: ".toc-section",
            animation: "false",
            html: true,
            content: $('#toc-content').html()
        });

        $toc.on('click', function (e) {
            var $popover;
            e.preventDefault();
            $toc.popover('toggle');
            $popover = $('.toc-section').find('.popover');
            $popover.find('.arrow').position({
               of: $toc,
               my: 'bottom center',
               at: 'bottom'
            });
        });

        $('.page-footer').on('click', function () {
            alert('?');
            //mySwiper.swipeTo(1);
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