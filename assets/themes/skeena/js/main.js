
(function () {
'use strict';
    var mySwiper;
    window.onload = function() {
        var $masthead = $('.masthead');
        mySwiper = new Swiper('.swiper-container',{
            mode:'vertical',
            loop: true,
            simulateTouch: true,
            // mousewheelControl: true,
            grabCursor: true,
            onSlideChangeEnd: function (swiper) {
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
            var $popover, tocHeight;
            e.preventDefault();
            $toc.popover('toggle');
            $popover = $('.toc-section').find('.popover');
            tocHeight = $popover.closest('.toc-section').height();
            $popover.find('.popover-content').height($popover.closest('.section').height() - tocHeight);
            console.log($popover.closest('.section').height() - tocHeight);
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

    });
})();