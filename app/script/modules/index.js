define([
		'plugin/fullPage'
	],
	function(
		fullPage
	) {

		function initView() {
			$('.wp-inner').fullpage({
				page: '.page',
				duration: 500,
				drag: true,
				change: function() {},
				beforeChange: function() {},
				afterChange: function() {},
				orientationchange: function() {}
			});
		}

		function show() {
			initView();
		}

		function preload() {
			return module;
		}
		var module = {
			preload: preload,
			show: show
		};
		return module;
	}
);