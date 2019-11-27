function animate(obj,target,callback) {
			clearInterval(obj.timer);
			obj.timer = setInterval(function(){
			var step = ((target-obj.offsetLeft)/10)>0? Math.ceil((target-obj.offsetLeft)/10):Math.floor((target-obj.offsetLeft)/10);
				if(obj.offsetLeft == target) {
				clearInterval(obj.timer);
				if(callback) {
					callback();
				}
			}
			//匀速动画
			// obj.style.left = obj.offsetLeft + 1 + 'px';
			//缓动动画
			obj.style.left = obj.offsetLeft + step + 'px';
		},30)};	