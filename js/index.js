(function(){
	$(function(){
		//carousel图片轮播支持滑动手势
		$('.carousel').hammer().on('swipeleft', function(){
			$(this).carousel('next');
		});

		$('.carousel').hammer().on('swiperight', function(){
			$(this).carousel('prev');
		});
	})
})();