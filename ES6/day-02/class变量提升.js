// 普通function
new FF();
function FF() {
	this.f = 'ff';
}

// class构造函数没有变量提升
new GG();// GG is notdefined
class GG{
	constructor() {
		this.egg = 'egg';
	}
}