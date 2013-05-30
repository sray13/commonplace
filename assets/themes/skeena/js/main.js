---
---
(function () {
'use strict';
    var mySwiper;
    alert('{{ASSET_PATH}}');
    window.onload = function() {
        var $masthead = $('.masthead');
        mySwiper = new Swiper('.swiper-root',{
            mode:'vertical',
            // loop: true,
            simulateTouch: true,
            // mousewheelControl: true,
            grabCursor: true,
            onSlideChangeEnd: function (swiper) {
                var $slide = $(swiper.getSlide(swiper.realIndex)),
                    $shortPost = $slide.find('.short-post'),
                    $longPost = $slide.find('.long-post'),
                    $gallery = $slide.find('.gallery'),
                    backgroundImage = $slide.data('img'),
                    currentBackgroundPath = $('.swiper-root').css('background-image').split('/'),
                    currentBackgroundImage = currentBackgroundPath[currentBackgroundPath.length-1].replace(')',''),
                    childSlider;

                // show or hide the nav
               if (swiper.activeIndex !== 0) {
                    $masthead.removeClass('hidden');
                } else {
                    $masthead.addClass('hidden');
                }

                // update the background image
                if (backgroundImage && currentBackgroundImage !== backgroundImage) {
                    $('.swiper-root').css('background-image', 'url({{ASSET_PATH}}skeena/img/'+ backgroundImage + ')');
                } else if (! backgroundImage) {
                    $('.swiper-root').css('background-image', 'url({{ASSET_PATH}}skeena/img/cover.jpg)');
                }


                // activate child swiper
                if ($longPost.length && ! $longPost.find('.textify').length) {
                    $longPost.textify({
                        numberOfColumn: 1,
                        width: "auto",
                        height: $longPost.height()

                    });
                    $longPost.removeClass('hidden');
                }

                if ($gallery.length) {
                
                    $gallery.swiper({
                        mode: 'horizontal'
                    });
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