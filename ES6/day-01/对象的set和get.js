let obj = {
	_age:20,
	// 对象中的get 后面跟一个以属性名命名的函数 只要通过.运算符获取该属性时就会触发该函数
	get name() {
		console.log(1);
		return this._age;
	},
	// 对象中的set 后面跟一个以属性名命名的函数 只要通过.运算符设置该属性的值时就会触发该函数
	set name(val) {
		console.log(2);
		this._age = 30;
		// 一定要有形参 
	}
}
console.log(obj.name);// 1 20
obj.name = 3;
console.log(obj._age);//2  30