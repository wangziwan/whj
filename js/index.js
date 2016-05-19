(function(){
	$(function(){
		//carousel图片轮播支持滑动手势
		$('#carousel-banner').hammer().on('swipeleft', function(){
			$(this).carousel('next');
		});

		$('#carousel-banner').hammer().on('swiperight', function(){
			$(this).carousel('prev');
		});
	})
})();