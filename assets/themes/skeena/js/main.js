
(function () {
'use strict';
    $(document).ready(function () {

        var $title = $(".page-header").find('h2'),
            $window = $(window);

        $(window).on('scroll', function () {

            if ($window.scrollTop() > 64) {
                $title.addClass('static-nav');
            } else {
                $title.removeClass('static-nav')
            }
        });    
    });
})();