---
---
{% include JB/setup %}

(function () {
'use strict';
    var mySwiper;

    var layer = new MM.TemplatedLayer('http://tilestream.apps.ecotrust.org/v2/commonplace/{Z}/{X}/{Y}.png');

    var center = {
        lat:54,
        lon: -130
    };
    var zoom = 7;

    // Create a map
    window.map = mapbox.map('map', layer, null, []);
    map.centerzoom(center, zoom);

    window.onload = function() {
        var $masthead = $('.masthead');

        mySwiper = new Swiper('.swiper-root',{
            mode:'vertical',
            // loop: true,
            simulateTouch: true,
            mousewheelControl: true,
            grabCursor: true,
            onSlideChangeStart: function (swiper) {
                var $slide = $(swiper.getSlide(swiper.realIndex));
                if ($slide.data('zoom')) {
                    map.zoom($slide.data('zoom'), true);
                } else {
                    map.zoom(zoom, true);
                }
            },
            onSlideChangeEnd: function (swiper) {
                var $slide = $(swiper.getSlide(swiper.realIndex)),
                    $shortPost = $slide.find('.short-post'),
                    $longPost = $slide.find('.post'),
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
                    $('.swiper-root').css('background-image', 'url({{BASE_PATH}}/assets/themes/skeena/img/'+ backgroundImage + ')');
                } else if (! backgroundImage) {
                    $('.swiper-root').css('background-image', 'url({{BASE_PATH}}/assets/themes/skeena/img/cover.jpg)');
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

        $(document).on('click', '.story', function (e) {
            e.preventDefault();
            mySwiper.swipeTo($($(this).data('story')).index());
            $toc.popover('hide');
        });

        $('.page-footer').on('click', function () {
            var nextSlide = mySwiper.realIndex + 1;
            if (nextSlide === mySwiper.slides.length) {
                mySwiper.swipeTo(0);
            } else {
                mySwiper.swipeTo(mySwiper.realIndex);    
            }
            
        });

    });
})();