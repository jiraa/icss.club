require.config({
    paths: {
        'text': 'lib/text'
    }
});
require(
    ['modules/index'],

    function(index) {
        index.preload().show();
    }
);