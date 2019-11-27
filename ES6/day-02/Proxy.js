// 用于对对象默认操作的拦截/改写

// new 方式构造Proxy
// new Proxy()
let obj = {
	name:'bruce',
	age:'20',
}
// 让proxy1代理obj 需要通过proxy1去操作代理的obj,才会触发第二个参数里对应的方法
let proxy1 = new Proxy(obj,{
	get(target,key,proxy) {
		console.log('get')
		return 'haha';
	},
	set() {
		console.log('set');
	}
})
// get 只要是获取 就会触发
console.log(proxy1.name);//heihei haha
console.log(proxy1.name = 'clark')

console.log(obj.name)