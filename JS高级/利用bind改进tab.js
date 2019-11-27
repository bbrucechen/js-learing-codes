// var that;
class Tab {
	constructor(id) {
		// 获取元素
		that = this;
		this.main = document.querySelector(id);
		this.add = this.main.querySelector('.tabadd');
		this.ul = this.main.querySelector('.firstnav ul:first-child');
		this.fsection = this.main.querySelector('.tabscon');	
		this.init();
	}

	// 总程序
	init() {
		// init 初始化操作
		this.updateNode();
		this.add.onclick = this.addTab.bind(this.add,this);
		for(var i =0; i< this.lis.length;i++) {
			this.lis[i].index = i;
			this.lis[i].onclick = this.toggleTab.bind(this.lis[i],this);
			this.remove[i].onclick = this.removeTab.bind(this.remove[i],this);
			this.spans[i].ondblclick = this.editTab;
			this.sections[i].ondblclick = this.editTab;
			}
	}

	// 动态获取所有的li和section
	updateNode() {
		this.lis = this.main.querySelectorAll('li');
		this.sections = this.main.querySelectorAll('section');
		this.remove = this.main.querySelectorAll('.icon-guanbi');
		this.spans = this.main.querySelectorAll('.first-nav li span:first-child');
	}

	// 切换功能
	toggleTab(that) {
		that.clearClass();
		this.className = 'liactive';
		that.sections[this.index].className = 'conactive';
	}

	// 清除所有类名
	clearClass() {
		for(var i =0;i < this.lis.length;i++) {
			this.lis[i].className = '';
			this.sections[i].className = '';
		}
	}

	// 添加功能
	addTab(that) {
		that.clearClass();
		var li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>';
		var section = '<section class="conactive">新内容</section>';
		that.ul.insertAdjacentHTML('beforeend',li);
		that.fsection.insertAdjacentHTML('beforeend',section);
		that.init();
	}
	// 删除功能
	removeTab(that,e) {
		e.stopPropagation();
		var index = this.parentNode.index;
		that.lis[index].remove();  //remove() 可以直接删除指定元素
		that.sections[index].remove();
		that.init();
		// 但删除的不是选中的 选中的保持选中状态
		// 删除的是选中状态 则删除后其上一个为选中状态
		if (document.querySelector('.liactive')) return;
		index --;
		that.lis[index] && that.lis[index].click();
	}
	// 修改功能
	editTab() {
		// 选中后默认文字为之前的文字
		var str = this.innerHTML;
		// 双击禁止选中文字
		window.getSelection? window.getSelection().removeAllRanges() : document.selection.empty();
		this.innerHTML = '<input type="text" />';
		var input = this.children[0];
		input.value = str;
		input.select();
		// 失去焦点时赋值
		input.onblur = function() {
			this.parentNode.innerHTML = this.value;
		}
		// 按下回车键时赋值
		input.onkeyup = function(e) {
			if(e.keyCode == 13) {
				this.blur();
			} 
		}
	}
}
new Tab('#tab');
