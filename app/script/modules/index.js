define([
		'plugin/fullPage',
		'plugin/detect'
	],
	function(
		fullPage, detect
	) {

		function initView() {
			if($.os.phone){
			}else if($.os.tablet){
			}else{
			}
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