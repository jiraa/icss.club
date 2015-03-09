define([
		'plugin/fullPage',
		'plugin/detect'
	],
	function(
		fullPage, detect
	) {

		function initView() {
			console.log(detect);
			console.log($.os);
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