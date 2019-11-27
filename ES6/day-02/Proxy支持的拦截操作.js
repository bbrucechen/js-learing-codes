// set(target,propKey,value,receiver)

let obj = {name:'zhufeng'}
let proxy1 = new Proxy(obj,{
	get(target,propKey,receiver) {
		// target:原对象
		// Propkey:获取的属性名
		// receiver 当前Proxy实例
		return target[propKey]
	},
	set(target,propKey,value,receiver) {
		// target:原对象
		// Propkey:获取的属性名
		// value:设置的值
		// receiver 当前Proxy实例
		console.log('set');
		target[propKey] = value;
	},
	// has 拦截in运算符
	has(target,propKey) {
		// console.log('yes');
		return propKey in target;
	},
})

console.log(proxy1.name);// zhufeng
proxy1.name = 'haha';
console.log(obj['name']); // haha

console.log('name' in proxy1);// true

function getObj(x,y) {
	console.log(x+y);
}
let proxy2 = new Proxy(getObj,{
	// 拦截函数执行
	apply(target,object,args) {
		// target:原函数
		// args:传入的参数 数组形式
		// obejct：修改函数this指向
		console.log('function');
		console.log(args);
		console.log(object);
		if(object) {
			object.fn = target;
			object.fn(...args);
			delete object.fn;
		} else {
			target(...args);
		}
	},
})

proxy2();//function [] undefined NaN
proxy2(1,2);// function [1,2] undefiend 3
proxy2.call({name:'bruce'},1,2);// function [1,2]  {name:'bruce'} 3