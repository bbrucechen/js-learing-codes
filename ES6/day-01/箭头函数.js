// 箭头函数里的this是上一级作用域下的this 
(() => {
	console.log(this);
})()

// 箭头函数里没有arguments对象 用...args代替
fn = (x,y) => {
	console.log(arguments);
}

fn(1,2);

// 箭头函数不能做构造函数 不能new调用
fn = (x,y) => {
	this.name = x;
	this.age = y;
}

const obj = new fn('bruce',1);


