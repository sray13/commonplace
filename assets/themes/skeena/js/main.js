---
---
{% include JB/setup %}

(function () {
'use strict';

if (window.location.hash) {
    window.originalHash = window.location.hash;
    window.location.replace("#");

    // slice off the remaining '#' in HTML5:    
    if (typeof window.history.replaceState == 'function') {
      history.replaceState({}, '', window.location.href.slice(0, -1));
    }
} else {
    window.originalHash = false;
}

/*! Backstretch - v2.0.3 - 2012-11-30
* http://srobbin.com/jquery-plugins/backstretch/
* Copyright (c) 2012 Scott Robbin; Licensed MIT */
(function(e,t,n){"use strict";e.fn.backstretch=function(r,s){return(r===n||r.length===0)&&e.error("No images were supplied for Backstretch"),e(t).scrollTop()===0&&t.scrollTo(0,0),this.each(function(){var t=e(this),n=t.data("backstretch");n&&(s=e.extend(n.options,s),n.destroy(!0)),n=new i(this,r,s),t.data("backstretch",n)})},e.backstretch=function(t,n){return e("body").backstretch(t,n).data("backstretch")},e.expr[":"].backstretch=function(t){return e(t).data("backstretch")!==n},e.fn.backstretch.defaults={centeredX:!0,centeredY:!0,duration:5e3,fade:0};var r={wrap:{left:0,top:0,overflow:"hidden",margin:0,padding:0,height:"100%",width:"100%",zIndex:-999999},img:{position:"absolute",display:"none",margin:0,padding:0,border:"none",width:"auto",height:"auto",maxWidth:"none",zIndex:-999999}},i=function(n,i,o){this.options=e.extend({},e.fn.backstretch.defaults,o||{}),this.images=e.isArray(i)?i:[i],e.each(this.images,function(){e("<img />")[0].src=this}),this.isBody=n===document.body,this.$container=e(n),this.$wrap=e('<div class="backstretch"></div>').css(r.wrap).appendTo(this.$container),this.$root=this.isBody?s?e(t):e(document):this.$container;if(!this.isBody){var u=this.$container.css("position"),a=this.$container.css("zIndex");this.$container.css({position:u==="static"?"relative":u,zIndex:a==="auto"?0:a,background:"none"}),this.$wrap.css({zIndex:-999998})}this.$wrap.css({position:this.isBody&&s?"fixed":"absolute"}),this.index=0,this.show(this.index),e(t).on("resize.backstretch",e.proxy(this.resize,this)).on("orientationchange.backstretch",e.proxy(function(){this.isBody&&t.pageYOffset===0&&(t.scrollTo(0,1),this.resize())},this))};i.prototype={resize:function(){try{var e={left:0,top:0},n=this.isBody?this.$root.width():this.$root.innerWidth(),r=n,i=this.isBody?t.innerHeight?t.innerHeight:this.$root.height():this.$root.innerHeight(),s=r/this.$img.data("ratio"),o;s>=i?(o=(s-i)/2,this.options.centeredY&&(e.top="-"+o+"px")):(s=i,r=s*this.$img.data("ratio"),o=(r-n)/2,this.options.centeredX&&(e.left="-"+o+"px")),this.$wrap.css({width:n,height:i}).find("img:not(.deleteable)").css({width:r,height:s}).css(e)}catch(u){}return this},show:function(t){if(Math.abs(t)>this.images.length-1)return;this.index=t;var n=this,i=n.$wrap.find("img").addClass("deleteable"),s=e.Event("backstretch.show",{relatedTarget:n.$container[0]});return clearInterval(n.interval),n.$img=e("<img />").css(r.img).bind("load",function(t){var r=this.width||e(t.target).width(),o=this.height||e(t.target).height();e(this).data("ratio",r/o),e(this).fadeIn(n.options.speed||n.options.fade,function(){i.remove(),n.paused||n.cycle(),n.$container.trigger(s,n)}),n.resize()}).appendTo(n.$wrap),n.$img.attr("src",n.images[t]),n},next:function(){return this.show(this.index<this.images.length-1?this.index+1:0)},prev:function(){return this.show(this.index===0?this.images.length-1:this.index-1)},pause:function(){return this.paused=!0,this},resume:function(){return this.paused=!1,this.next(),this},cycle:function(){return this.images.length>1&&(clearInterval(this.interval),this.interval=setInterval(e.proxy(function(){this.paused||this.next()},this),this.options.duration)),this},destroy:function(n){e(t).off("resize.backstretch orientationchange.backstretch"),clearInterval(this.interval),n||this.$wrap.remove(),this.$container.removeData("backstretch")}};var s=function(){var e=navigator.userAgent,n=navigator.platform,r=e.match(/AppleWebKit\/([0-9]+)/),i=!!r&&r[1],s=e.match(/Fennec\/([0-9]+)/),o=!!s&&s[1],u=e.match(/Opera Mobi\/([0-9]+)/),a=!!u&&u[1],f=e.match(/MSIE ([0-9]+)/),l=!!f&&f[1];return!((n.indexOf("iPhone")>-1||n.indexOf("iPad")>-1||n.indexOf("iPod")>-1)&&i&&i<534||t.operamini&&{}.toString.call(t.operamini)==="[object OperaMini]"||u&&a<7458||e.indexOf("Android")>-1&&i&&i<533||o&&o<6||"palmGetResource"in t&&i&&i<534||e.indexOf("MeeGo")>-1&&e.indexOf("NokiaBrowser/8.5.0")>-1||l&&l<=6)}()})(jQuery,window);


    var mySwiper;
    window.blockSlideChange=false;

    //window.onload = function() {
    $('document').ready( function() {
        var $masthead = $('.masthead'),
            hGalleryArray=new Array(),
            loadIntroImages = window.setTimeout(function () {postLoadImages($('div.swiper-slide'),'intro')},3000),
            loadGalleryImages = window.setTimeout(function () {postLoadImages($('img.postload'),'gallery')},6000);

            function postLoadImages ($theImages, which){
                $theImages.each(function () {
                    var $this=$(this),
                    theSource=$this.data('img') || false;

                    if (theSource)
                        if (which=='gallery'){
                            $this.attr('src', theSource);
                        } else {
                            $('<img />')[0].src = theSource;
                        }
                });

            }

            

        mySwiper = new Swiper('.swiper-root',{
            mode:'vertical',
            // loop: true,
            simulateTouch: true,
            mousewheelControl: true,
            keyboardControl: true,
            grabCursor: true,
            onSlideChangeStart: function (swiper) {
                var $slide = $(swiper.getSlide(swiper.realIndex));

                if (!$slide.hasClass('marker-slide')) {
                    //$('#map').children('div:last-child').removeClass('active-map');
                    $('.swiper-root').addClass('no-touch-event');
                    $('.legend, .leaflet-control-zoom, #map > .page-footer').addClass('hidden');

                    $('.layer-on').each(function (i, layer) {
                        map.removeLayer(currentLayers[$(layer).data('layer')]);
                    });
                    map.dragging.disable();
                    map.touchZoom.disable();
                    map.doubleClickZoom.disable();
                    map.scrollWheelZoom.disable();
                }
            },
            onSlideChangeEnd: function (swiper) {
                var $slide = $(swiper.getSlide(swiper.realIndex)),
                    $shortPost = $slide.find('.short-post'),
                    $longPost = $slide.find('.post'),
                    $gallery = $slide.find('.gallery'),
                    backgroundImage = $slide.data('img'),
                    currentBackgroundPath = $('.swiper-root').css('background-image').split('/'),
                    //currentBackgroundImage = currentBackgroundPath[currentBackgroundPath.length-1].replace(')',''),
                    currentBackgroundImage = $('.backstretch:last img',$('.swiper-root')).attr('src'),
                    //subBackgroundImage = false,
                    preserveBodyBackground = $slide.children('div.page.full').length,
                    childSliderID=$('.gallery',$slide).attr('id') || '',
                    subSlideIsLight=undefined,
                    nextStoryName=$slide.next().attr('id') || false;


                //set this slide to be 'active' for purposes of applying global keypress events
                $('.swiper-root>.swiper-wrapper>div.swiper-slide').removeClass('active');
                $slide.addClass('active');

                // show or hide the nav
                if ($slide.data('hash')) {
                    window.location.hash = $slide.data('hash');
                }
               if (swiper.activeIndex !== 0) {
                    $masthead.removeClass('hidden');
                } else {
                    $masthead.addClass('hidden');
                }

                //set the body class as light or dark to change nav and sidebar colors for different backgrounds
                if (!(hGalleryArray[childSliderID]===undefined))     {          
                    subSlideIsLight=$('.swiper-slide',$slide).eq(hGalleryArray[childSliderID].activeSlide).hasClass('light');
                    //subBackgroundImage=$('.swiper-slide',$slide).eq(hGalleryArray[childSliderID].activeSlide).data('img');
                }

                if ((($slide.find('div.page.light').length) && subSlideIsLight === undefined) || (subSlideIsLight)) {
                    $('body').addClass('dark');
                } else {
                    $('body').removeClass('dark');
                }

                // update the background image
                if (backgroundImage && currentBackgroundImage !== backgroundImage && !preserveBodyBackground) {
                    $('.swiper-root').backstretch(backgroundImage, {fade:450});                    
                } else if (! backgroundImage && !preserveBodyBackground) {
                    $('.swiper-root').children('.backstretch').remove();
                }


                // find the name of the next story and populate the div under the right nav arrow
                if(nextStoryName) {
                    $slide.find('.next-story-name').text(nextStoryName.split('-').join(' '));
                }
                if (swiper.activeIndex > 1){
                    $('#-zoom-7').parent().fadeOut("fast");
                } else {
                    $('#-zoom-7').parent().fadeIn("fast");
                }

                // activate textify swiper
                if ($longPost.length && ! $longPost.find('.textify').length) {

                   var theImages=$('img',$longPost);

                   $longPost.on('click','img',function () {
                        var $theImage = theImages.filter('img[src="'+$(this).attr("src")+'"]'),
                        $theBox=$('<div id="the-lightbox" style="width:100%"><div class="popover-close">close</div><div id="the-lightbox-content" style="margin-top:30px;width:100%;text-align:center;height:'+($(window).height()-150)+'px;"></div></div>');
                        $theImage.css({'max-height':'100%','cursor':'pointer'});
                        $theBox.find(":nth-child(2)").append($theImage).append('<div class="caption">'+$(this).attr("alt")+'</div>');
                        //debugger;
                       $theBox.lightbox_me({
                            centered:false,
                            destroyOnClose:true,
                            modalCSS: {top: '0'},
                            closeSelector:'.popover-close',
                            overlayCSS:{background: 'white', opacity: .9}    
                        });
                   });

                    $longPost.textify({
                        numberOfColumn: 1,
                        width: "auto",
                        padding:0,
                        height: "auto"//$longPost.height()

                    });

  

                    $longPost.removeClass('hidden');
                    //debugger;
                }

                // EDIT THIS FUNCTION TO MAKE THE SUB-TOC ITEMS ALL THE SAME HEIGHT
                // $('.sub-toc-item').each(function () {
                //     var currentTallest = 0;
                //     $('h3.story-title',$(this)).each(function () {                    
                //             if ($(this).height() > currentTallest) { currentTallest = $(this).height(); }
                //         });
                //         //if (!px && Number.prototype.pxToEm) currentTallest = currentTallest.pxToEm(); //use ems unless px is specified
                //         // for ie6, set height since min-height isn't supported
                //         if ($.browser.msie && $.browser.version == 6.0) { $(this).children().css({'height': currentTallest}); }
                //         $('h3.story-title',$(this)).css({'min-height': currentTallest});
                // });


                // if ($slide.next().find('.gallery').length) {
                //     $slide.next().removeClass('hidden');
                // }


                //activate the photo essay if there is one
                if ($gallery.length) {
                    var theID=$gallery.attr('id'),
                        paginationClass='.'+theID+'-pagination';

                    // Add this new gallery object into an array for
                    // later access to the swiper methods
                    if(!(theID in hGalleryArray)){
                    hGalleryArray[theID]= $gallery.swiper({
                        mode: 'horizontal',
                        pagination : paginationClass,
                        keyboardControl:false,
                        createPagination: true,                        
                        onSlideChangeEnd: function (swiper) {
                            var $slide = $(swiper.getSlide(swiper.realIndex)),
                                $slideRoot = $slide.parentsUntil(".page.full",".page-wrapper"),
                                backgroundImage = $slide.data('img'),
                                $voiceWrapper=$slide.find('.voice-content-wrapper');


                            // update body class to change element colors + update the background image
                            //(swiper.activeIndex==0 && $slideRoot.parent().hasClass("light")) ? $('body').addClass('dark') : $('body').removeClass('dark');
                            if (backgroundImage) {
                                $slideRoot.backstretch(backgroundImage, {fade:450});
                                if ($('.backstretch',$slideRoot).length>2) $('.backstretch:lt(1)').remove();
                            } else {
                                $('.backstretch',$slideRoot).remove();
                            }

                            if ($slide.hasClass('light')){
                                $('body').addClass('dark');
                            } else {
                                $('body').removeClass('dark');
                            }

                            //check to see if this is the last slide
                            if ((swiper.slides.length-1)==swiper.activeIndex){
                                $('.swiper-slide.active').addClass('last-page');
                            } else if (swiper.activeIndex==0) {
                                $('.swiper-slide.active').addClass('first-page');
                            }else {
                                $('.swiper-slide.active').removeClass('last-page first-page');
                            }

                            // initialize scroll buttons for voices content if overflowing
                            if ($voiceWrapper && (!($voiceWrapper.find('.voice-scroller').length))) {                                    
                                if(($('.voice-content-text',$voiceWrapper).height())>($('.voice-content',$voiceWrapper).height())) {
                                    $voiceWrapper.prepend('<div class="voice-scroller"><span class="up"></span><span class="down"></span></div>');
                                }
                            } //end voices bio scroll button init
                        } //end onSlideChangeEnd callback for horizontal slider                        
                    }); // end init array for main-slide-contained horizontal gallery
                    
                    } // end if block checking for gallery object existance
                } // end block checking if this slide contains a horizontal 



                if ($slide.hasClass('marker-slide')) {
                    $('.legend, .leaflet-control-zoom, #map > .page-footer').removeClass('hidden');
                    // map.addLayer(markerLayer);
                    window.blockSlideChange=true;
                    //$('#map').children('div:last-child').addClass('active-map');
                    $('.swiper-root').addClass('no-touch-event');
                    if (!($('#map').children('.page-footer').length)) {
                        $('#map').append('<div class="page-footer"><a href="#"><i class="icon-chevron-down"></i></a></div>')
                    }
                    $('.layer-on').each(function (i, layer) {
                        currentLayers[$(layer).data('layer')].addTo(map);
                    });
                    map.dragging.enable();
                    map.touchZoom.enable();
                    map.doubleClickZoom.enable();
                    map.scrollWheelZoom.enable();
                } else {
                    // map.removeLayer(markerLayer);
                    $('.swiper-root').removeClass('no-touch-event');
                    window.blockSlideChange=false;
                }

            }, // end on slideChangeEnd callback for main vertical slider
            scrollbar: {
                container : '.swiper-scrollbar',
                draggable : true,
                hide: false,
                snapOnRelease: true
            } //end scrollbar plugin parameter array
        });  //end init block for main vertical swiper         
        
//Begin main event bindings

        // Activate left/right arrows that we've placed on top of all horizontally enabled slides
        $('.navarrows a, .next-story').on('click',function (e){
            e.preventDefault();
            e.stopPropagation();
            var $hContainer=$(this).parentsUntil('div.swiper-slide','div.page').find('div.page-wrapper'),
                isGallery=$hContainer.hasClass('gallery-wrapper'),
                // yes, here theID may be a string, or it may be an object. sorry.
                theID= isGallery ? $hContainer.find('.gallery').attr('id') : $hContainer.find('.text_pagination'),
                $activeSlide = $('.swiper-slide.active');

                if ($activeSlide.hasClass('last-page') && ($(this).hasClass("next-story") || $(this).hasClass("right-arrow"))) {
                    mySwiper.swipeNext();
                } 

                if(isGallery){
                    //this is a swiper gallery.  simply use the built in swipeNext/swipePrev methods
                    $(this).hasClass("right-arrow") ? hGalleryArray[theID].swipeNext() : hGalleryArray[theID].swipePrev();
                } else { 
                    //this isn't a gallery -> must be a textify slide. update logic later if more slide types introduced
                    //we need to fire the click event on the next/previous hilited number
                    //as textify doesn't supply prev/next navigation methods

                    var theGalIndex=theID.find('li.selected').index(),
                    theNavNumbers=$('li',theID);

                    //are we going right?
                    if ($(this).hasClass("right-arrow") || $(this).hasClass("next-story")) { 
                        //can we go right?
                        if ((++theGalIndex)<theNavNumbers.length) {
                            theNavNumbers.eq(theGalIndex).click();
                        }
                    } else { //it appears we're going left
                        //can we go left?
                        if ((--theGalIndex)>=0) {
                            theNavNumbers.eq(theGalIndex).click();
                        }
                    } // end logic for textify left/right navigation
                } // end logc blocks for gallery vs textified slide
        }); // end function for nav arrow click handling

        // Control the horizontal sliders with click functions
        $('.gallery-wrapper').on('click','.sub-toc-item,.swiper-pagination-switch',function(e){
            e.preventDefault();
            var theID=$(this).parentsUntil('.page.full').find('.swiper-container').attr('id'),
                theGalIndex = $(this).hasClass('sub-toc-item') ? $(this).index()+1 : $(this).index();
            hGalleryArray[theID].swipeTo(theGalIndex);
        });

        // nav to story from map
        $('#map').on('click', '.leaflet-popup a', function (e) {
            var $link = $(this);
            e.preventDefault();
            if ($link.hasClass('voices-link')) {
                mySwiper.swipeTo($('#voices').index());
                hGalleryArray['voices-gallery'].swipeTo($($link.data('story')).index());
            } else {
                mySwiper.swipeTo($($link.data('story')).index());
            }
        });

        // This block used to be in slideChangeEnd for vertical slider.  see if we can delete it.
        // //Bind swiping action to link click on map popups
        // $('#map').on('click', '.leaflet-popup a', function (e) {
        //     var $link = $(this);
        //     e.preventDefault();
        //     if ($link.hasClass('voices-link')) {
        //         mySwiper.swipeTo($('#voices').index());
        //     }
        //     //debugger;
        // });



        // Control the horizontal sliders using arrow keys
        $(document).on('keydown',function (e) {
            var kc = e.keyCode || e.charCode;
            if (kc==39 || kc==37){
                e.preventDefault();
                e.stopPropagation();
            }
            if (kc == 39) {
                if(!$('.swiper-slide.active').hasClass('last-page'))
                $('a.right-arrow','.swiper-slide.active').click();
            }
            if (kc == 37) {
                $('a.left-arrow','.swiper-slide.active').click();
            } 
        });

        $(document).on('textifyBuildDone',function (e,$textify) {
            var $theNav=$('div.textify_nav',$textify),
                theMaxNumber=$('li:last-child',$theNav).text();

            if(!($theNav.find('#x-of-y')).length){
                $('ul.text_pagination',$theNav).css({'visibility': 'hidden','margin-bottom': '-100px'})
                $theNav.prepend('<div id="x-of-y" style="text-align:center;position:absolute;bottom:0;width:100%"><span class="x intro">1</span> <span class="of">of</span> <span class="y intro"></span></div>');
            }
            $('span.y', $theNav).text(theMaxNumber);
        });

        $(document).on('textifyNavDone',function (e,$textify) {
            var $theNav=$('div.textify_nav',$textify),
            theCurrentNumber=$('li.selected',$theNav).text(),
            $images=$('.page'+theCurrentNumber+' img',$textify);

            $images.each(function () {
                var $this=$(this),
                    theCaption=$this.attr('alt');

                if (!$this.parent().find('span').length) {
                    $this.parent().css('position','relative').prepend('<span class="caption">'+theCaption+'</span>').find('span').css('top',function () {
                        var $that=$this;
                    
                        return ($that.height()-$(this).height())+$that.position().top;
                    });
                }
            });

            $('span.x', $theNav).text(theCurrentNumber);
            if ($('span.x', $theNav).text()==$('span.y', $theNav).text()) {
                $('.swiper-slide.active').addClass('last-page');
            } else if ($('span.x', $theNav).text()=='1') {
                $('.swiper-slide.active').addClass('first-page');
            } else {
                $('.swiper-slide.active').removeClass('first-page last-page');
            }
        });

        
//         $('.addthis_toolbox a').on('click',function (e) {
//             e.preventDefault();
//             var theURL=$(this).attr("href").replace(/ /g,'+').replace('#','%23');
//             console.log(theURL);
//             window.open (theURL,'Sharing is caring','height=400,width=600,toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,directories=no,status=no')

// //             var $theBox=$('<div id="the-lightbox" style="width:100%"><div class="popover-close">close</div><div id="the-lightbox-content" style="margin-top:30px;width:100%;text-align:center;height:'+($(window).height()-150)+'px;"><iframe id="foo" style="z-index: 1;border: none; margin: 0; padding: 0; position: absolute; width: 75%; height: 100%; top: 0; left: 0; filter: mask();"/></div></div>');

// // debugger;

// //             $theBox.find("#foo").attr('src',$(this).attr('href'));
// //             //debugger;
// //            $theBox.lightbox_me({
// //                 centered:false,
// //                 destroyOnClose:true,
// //                 modalCSS: {top: '0'},
// //                 closeSelector:'.popover-close',
// //                 overlayCSS:{background: 'white', opacity: .9}    
// //             });
//        });


        // Control voices biography content with up/down arrows
        $('.voice-content-wrapper').on('click','span.up, span.down',function(e){
            e.preventDefault();
            var $this=$(this),
                scrollDown=$this.hasClass('down') ? true : false,
                theContent=$this.parent().siblings('.voice-content'),
                currentScroll=theContent.scrollTop();

            if(scrollDown){
                currentScroll+=(theContent.height()*.3)
            } else{
                currentScroll-=(theContent.height()*.3)                
            }
                $this.parent().siblings('.voice-content').animate({scrollTop: currentScroll}, 300);//.scrollTop(currentScroll);

        });
        

        
 //   }; //end window.onLoad event handler function
}); // end test document.ready wrapper


    $(document).ready(function () {

        var $title = $(".page-header").find('.title-name'),
            $window = $(window),
            $popoverArray=new Array();

            function styleStoryLeadin ($theElement,start,end) {
                var str=$(this).html(),
                delimiter = ' ',
                start = start || 0, end = end || 5,
                first = str.split(delimiter).slice(start,end).join(delimiter),
                last = str.split(delimiter).slice(end).join(delimiter),
                result = "<span class='schoolbook'>"+first+"</span> "+last;
                $(this).html(result);
            }

            // style first five words of body copy with a span to change font to Schoolbook
            $('p:firstChild','div.page-content').each(styleStoryLeadin);
            $('p:firstChild','div.gallery-intro-slide-wrapper').each(styleStoryLeadin);
            $('p:firstChild','div.voice-content-text').each(styleStoryLeadin);
            $('p:firstChild','.about-content').each(styleStoryLeadin);



/////////////////////////////////////// Initialize menu items and click-to-swipe navigation


        $('a', 'ul.nav').each(function(){
            var $this=$(this),
                theID=$this.attr('id')||false;
            if (theID) {
               $popoverArray[theID]=$('#'+theID);
                $popoverArray[theID].popover({
                    placement: "bottom",
                    trigger: "manual",
                    container: ".toc-section",
                    animation: "false",
                    html: true,
                    content: $('#'+theID+'-content').html()
                });


                $popoverArray[theID].on('click', function (e) {
                    var $popover,
                        tocHeight,
                        $this=$(this);
                    e.preventDefault();
                    //disappear all popovers that are not linked to the clicked item
                    $('a','ul.nav').not('#'+theID).popover('hide');
                    //toggle popover for the clicked item
                    $this.popover('toggle');

                    //set some heights, based on content
                    $popover = $('.toc-section').find('.popover');
                    $popover.addClass('ink-bg');
                    tocHeight = $popover.closest('.toc-section').height();
                    $popover.find('.popover-content').height($popover.closest('.section').height() - tocHeight);
                    $popover.find('.arrow').position({
                       of: $this,
                       my: 'bottom center',
                       at: 'bottom'
                    });


                    // equalize the heights of titles in each row for the TOC item
                    var currentTallest = 0;
                        $('.popover-content h3.story-title').each(function () {                    
                                if ($(this).height() > currentTallest) { currentTallest = $(this).height(); }
                            });
                        //if (!px && Number.prototype.pxToEm) currentTallest = currentTallest.pxToEm(); //use ems unless px is specified
                        // for ie6, set height since min-height isn't supported
                        if ($.browser.msie && $.browser.version == 6.0) { $(this).children().css({'height': currentTallest}); }
                        $('.popover-content h3.story-title').css({'min-height': currentTallest});

                    
                    // wire up the close "X" button
                    $('.popover-close','.popover').click(function () {
                        $this.popover('hide');
                    });

                }); // end onclick binding for top menu items
            } //end block -> if this anchor has an ID attached to it
        }); //end function to initialize all menu items


        // swipe back to the top, when clicking on "COMMONPLACE" in the header
        $('.nav h2').on('click', function (e) {
            mySwiper.swipeTo(1);
        });

        

        // swipe to the story when you click on the icon in the TOC
        $(document).on('click', '.story', function (e) {
            e.preventDefault();
            $('#toc').popover('hide');
           mySwiper.swipeTo($($(this).data('story')).index());
        }); // end scroll to clicked story binding


        $('.photo-info').on('click',function () {$(this).toggleClass('visible');});

        //swipe to the next slide when clicking on the yellow arrow at the page footer
        $('#map').on('click','.page-footer', function () {
            mySwiper.swipeNext();            
        }); // end page footer scroll to next page click binding


        // manage hash changes
        if (originalHash) {
            mySwiper.swipeTo($(originalHash).index());    
        }

        // init the audio player for voices
        audiojs.events.ready(function() {
            var as = audiojs.createAll();
        });

    }); //end document.ready function
    

})(); //end generic wrapper function