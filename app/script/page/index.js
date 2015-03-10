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
        ['modules/index'],

        function(index) {
            index.preload().show();
        });
})();