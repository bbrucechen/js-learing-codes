window.addEventListener('load',function() {
	var focus = document.querySelector('.focus');
	var ul = focus.children[0];
	var w = focus.offsetWidth;
	var index = 0;
	//利用定时器自动轮播
	var timer = setInterval(function(){
		index ++;
		//设置移动距离
		var translatex = -index * w;
		//设置过渡
		ul.style.transition = 'all .3s';
		//元素移动
		ul.style.transform = 'translateX(' +translatex+ 'px)';
	},2000);
	// 等过渡完再判断 利用transitionend判断
	ul.addEventListener('transitionend',function() {
		//如果是最后一张 则跳到第二张
		if(index >= ul.children.length-2) {
			index = 0;
			ul.style.transition = 'none';
			var translatex = -index * w;
			ul.style.transform = 'translateX(' +translatex+ 'px)';
		} // 如果第一开始就往后拖 则跳到第三张
		else if (index < 0) {
			index = 2 ;
			ul.style.transition = 'none'; 
			var translatex = -index * w;
			ul.style.transform = 'translateX(' + translatex + 'px)';
		}
		//小圆点变化
		//清除带有current类名的li
		focus.children[1].querySelector('li.current').classList.remove('current');
		// 设置对应图的li的类名
		focus.children[1].children[index].classList.add('current'); 
	})

	//手指滑动轮播图
	// touchstart 获取初始坐标
	var startX = 0;
	//手指移动距离
	var moveX = 0;
	// 判定手指有没有移动
	var flag = false;
	ul.addEventListener('touchstart',function(e) {
		startX = e.targetTouches[0].pageX;
		clearInterval(timer);
	})
	//touchmove 计算移动距离 同时移动盒子
	ul.addEventListener('touchmove',function(e) {
		// 计算移动距离
		moveX = e.targetTouches[0].pageX - startX;
		var translatex = -index * w + moveX;
		ul.style.transition = 'none';
		ul.style.transform = 'translateX(' + translatex + 'px)';
		flag =true;
		e.preventDefault();
	})
	// 手指离开 如果移动距离 大于50
	ul.addEventListener('touchend',function(e) {
		// 计算移动距离
		//判定移动距离 大于50则换图 否则弹回
		if(flag) {
			if(Math.abs(moveX) > 50 ) {
			if(moveX > 0) {
				index -- ;
			} else {
				index ++;
			}
			var translatex  = -index * w;
			ul.style.transform = 'translateX(' + translatex + 'px)';
			ul.style.transition = 'all .3s';
		} else {
			var translatex  = -index * w;
			ul.style.transform = 'translateX(' + translatex + 'px)';
			ul.style.transition = 'all .3s';
		}
		}
		//清除所有定时器 防止一直加速
		clearInterval('timer');
		timer = setInterval(function(){
		index ++;
		var translatex = -index * w;
		ul.style.transition = 'all .3s';
		ul.style.transform = 'translateX(' +translatex+ 'px)';
	},2000);
	})
	var goBack = document.querySelector('.goBack');
	var nav = document.querySelector('nav');
	window.addEventListener('scroll',function(){
		if(window.pageYOffset >= nav.offsetTop) {
			goBack.style.display = 'block';
		} else {
			goBack.style.display = 'none';

		}
	})
	goBack.addEventListener('click',function() {
		window.scroll(0,0);
	})
})