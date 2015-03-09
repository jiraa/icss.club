require({
    baseUrl: '../',
    paths: {
    },
    config: {

    }
});

;
(function() {

    require(
        ['lib/zepto','modules/index'],

        function($,index) {
            index.preload().show();
        });
})();