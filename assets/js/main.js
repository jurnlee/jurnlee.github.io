
(function ($) {

    skel.breakpoints({
        xlarge: '(max-width: 1680px)',
        large: '(max-width: 1280px)',
        medium: '(max-width: 980px)',
        small: '(max-width: 736px)',
        xsmall: '(max-width: 480px)'
    });

    $(function () {

        var $window = $(window),
            $body = $('body');

        // Disable animations/transitions until the page has loaded.
        $body.addClass('is-loading');

        var typed;
        $window.on('load', function () {
            window.setTimeout(function () {
                $body.removeClass('is-loading');
                typed = new Typed(".b-title", {
                    strings: ["^500 嗨^1000，屏幕那一端的你，","^500 这里是久礼先生的闲暇世界，^500 可能会分享^1000","技术、感动、生活^1000。"],
                    typeSpeed: 100,
                    backSpeed: 30,
                    backDelay: 500
                });
            }, 100);
        });

        //narrow nav actions
        $("#nav-narrow").find(".menu-btn").click(function (e) {
            var $menus = $("#nav-narrow").find(".menus");
            var dis = $menus.css("display");
            if ("none" === dis) {
                $menus.show(300);
            } else {
                $menus.hide(200);
            }
        });


        // Fix: Placeholder polyfill.
        $('form').placeholder();

        // Prioritize "important" elements on medium.
        skel.on('+medium -medium', function () {
            $.prioritize('.important\\28 medium\\29',
                skel.breakpoint('medium').active
            );
        });

        // Scrolly.
        $('.scrolly').scrolly();

        // Gallery.
        /*$('.gallery').each(function () {

            var $gallery = $(this),
                $content = $gallery.find('.content');

            // Poptrox.
            $content.poptrox({
                usePopupCaption: true
            });

            // Tabs.
            $gallery.each(function () {
                var $this = $(this),
                    $tabs = $this.find('.tabs a'),
                    $media = $this.find('.media');
                $tabs.on('click', function (e) {
                    var $this = $(this),
                        tag = $this.data('tag');
                    // Prevent default.
                    e.preventDefault();
                    // Remove active class from all tabs.
                    $tabs.removeClass('active');
                    // Reapply active class to current tab.
                    $this.addClass('active');
                    // Hide media that do not have the same class as the clicked tab.
                    $media
                        .fadeOut('fast')
                        .each(function () {
                            var $this = $(this);
                            if ($this.hasClass(tag))
                                $this
                                    .fadeOut('fast')
                                    .delay(200)
                                    .queue(function (next) {
                                        $this.fadeIn();
                                        next();
                                    });
                        });
                });
            });
        });*/

    });

})(jQuery);