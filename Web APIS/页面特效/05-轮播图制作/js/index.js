window.addEventListener('load',function() {
	var arrow_l = document.querySelector('.arrow-l');
	var arrow_r = document.querySelector('.arrow-r');
	var focus = document.querySelector('.focus');
	var focusWidth  = focus.offsetWidth;
	var num =0;
	var circle = 0;
	var flag = true;
	//箭头浮现消失
	focus.addEventListener('mouseover',function() {
		arrow_l.style.display = 'block';
		arrow_r.style.display = 'block';
		clearInterval(timer);
		timer = null;
	})
	focus.addEventListener('mouseout',function() {
		arrow_l.style.display = 'none';
		arrow_r.style.display = 'none';
		 timer = setInterval(function() {
		arrow_r.click();
	},2000)
	})
	//动态生成小圆圈
	var ul = focus.querySelector('ul');
	var ol = focus.querySelector('.circle');
	for(var i = 0; i < ul.children.length;i++) {
		var li = document.createElement('li');
		li.setAttribute('index',i);
		ol.appendChild(li);
		li.addEventListener('click',function() {
			for(var i = 0;i < ol.children.length;i++){
				ol.children[i].className = '';
			}
			this.className = 'current';
			// 点击小圆圈 移动轮播图
			var index = this.getAttribute('index');
			num = index;
			circle = index;
			animate(ul,-index * focusWidth);
		})
	}
	ol.children[0].className = 'current';
	//克隆图片放到最后
	var first = ul.children[0].cloneNode(true);
	ul.appendChild(first);
	// 点击按钮滚动图片
	
	// circle控制小圆圈的播放
	arrow_r.addEventListener('click',function() {	
		if(flag) {
			flag = false;
			if (num == ul.children.length-1) {
			ul.style.left = 0;
			num = 0;
		}
		num ++;
		animate(ul,- num * focusWidth,function() {
			flag = true;
		});
		circle ++;
		if(circle == ol.children.length) {
			circle = 0;
		}
		for(var i = 0;i < ol.children.length;i++) {
			ol.children[i].className = '';
		}
		ol.children[circle].className = 'current'; 
		}
	})

	arrow_l.addEventListener('click',function() {	
		if(flag) {
			flag=false;
			if (num == 0) {
			num = ul.children.length - 1;
			ul.style.left = -(ul.children.length - 1) * focusWidth +'px';
		}
		num --;
		animate(ul,- num * focusWidth,function() {
			flag= true;
		});
		circle --;
		if(circle < 0) {
			circle = ol.children.length - 1;
		}
		for(var i = 0;i < ol.children.length;i++) {
			ol.children[i].className = '';
		}
		ol.children[circle].className = 'current'; 
		}
	})

	//自动播放
	var timer = setInterval(function() {
		arrow_r.click();
	},2000)
})