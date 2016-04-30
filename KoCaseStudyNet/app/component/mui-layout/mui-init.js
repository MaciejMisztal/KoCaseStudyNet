define(["require", "exports", 'jquery', 'css!muicss', 'mui'], function (require, exports, $) {
    "use strict";
    function muiInit() {
        console.log('mui-init - jQuery(function($)....');
        var $bodyEl = $('body'), $sidedrawerEl = $('#sidedrawer');
        // ====================================================================
        // Toggle Sidedrawer
        // ====================================================================
        function showSidedrawer() {
            console.log('showSidedrawer()');
            // show overlay
            var options = {
                onclose: function () {
                    $sidedrawerEl
                        .removeClass('active')
                        .appendTo(document.body);
                }
            };
            var $overlayEl = $(mui.overlay('on', options));
            // show element
            $sidedrawerEl.appendTo($overlayEl);
            setTimeout(function () {
                $sidedrawerEl.addClass('active');
            }, 20);
        }
        function hideSidedrawer() {
            console.log('hideSidedrawer()');
            $bodyEl.toggleClass('hide-sidedrawer');
        }
        $('.js-show-sidedrawer').on('click', showSidedrawer);
        $('.js-hide-sidedrawer').on('click', hideSidedrawer);
        // ====================================================================
        // Animate menu
        // ====================================================================
        (function () {
            // hide L2
            var $titleEls = $('strong', $sidedrawerEl);
            var $aEls = $('a', $sidedrawerEl);
            $titleEls
                .next()
                .hide();
            $aEls.on('click', function () {
                console.log("aEls.on('click',...");
                $(mui.overlay('off'));
            });
            $titleEls.on('click', function () {
                console.log("$titleEls.on('click',...");
                $(this).next().slideToggle(200);
            });
        })();
    }
    exports.muiInit = muiInit;
});
//# sourceMappingURL=mui-init.js.map