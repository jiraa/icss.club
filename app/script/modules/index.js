define([
		'lib/doT',
		'text!template/m.html!strip',
		'text!template/pc.html!strip',
		'text!template/item0.html!strip',
		'text!template/item1.html!strip',
		'text!template/item2.html!strip',
		'plugin/detect',
		'plugin/fullpage'
	],
	function(
		doT, mTpl, pcTpl, item0, item1, item2
	) {
		var itemTpl;
		function initView() {
			mTplFn = doT.template(mTpl);
			pcTplFn = doT.template(pcTpl);
			item0Fn = doT.template(item0);
			item1Fn = doT.template(item1);
			item2Fn = doT.template(item2);
			itemTpl = [item0Fn, item1Fn, item2Fn];

			if ($.os.phone) {
				$('.wrap').html(mTplFn());
				bindEvent();
			} else if ($.os.tablet) {
				$('.wrap').html(mTplFn());
				bindEvent();
			} else {
				$('.wrap').html(pcTplFn());
				pcInitView();
			}
		}
		function pcInitView(){
			console.log("%c练小习，熟练掌握css，熟练掌握js，熟悉若干css以及js框架，喜欢研究，喜欢新技术。精通魔兽世界各职业pev技能，精通炉石传说各职业打法。","background-image:-webkit-gradient( linear, left top, right top, color-stop(0, #4096EE), color-stop(0.15, #FF1A00), color-stop(0.3, #4096EE), color-stop(0.45, #FF1A00), color-stop(0.6, #4096EE),color-stop(0.75, #FF1A00), color-stop(0.9, #4096EE), color-stop(1, #FF1A00) );color:transparent;-webkit-background-clip: text;font-size:14px;");
			console.log("%c", "padding:50px 300px;background:url('http://www.chengrang.com/image/233.gif') no-repeat;");
		}
		function bindEvent() {
			var $fullEl = $('.wp-inner', $('body'));
			$fullEl.fullpage({
				// change: addItem,
				// beforeChange: function() {},
				afterChange: addItem,
				drag: true
			});
		}

		function addItem(e) {
			var animateNum = Math.floor(Math.random()*7 + 1);
			var data = {};
			data.num = animateNum;
			data.e = e;
			$('.page').html('');
			$('.page' + e.next).html(itemTpl[e.next](data));
		}
		function clearItem(){

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