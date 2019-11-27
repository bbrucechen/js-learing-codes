// Promise用于处理异步函数 也是一个构造函数
// 通过new调用 参数为异步函数 并且会立即执行
// 异步函数里有两个函数参数 一个是resolve 一个是reject 用于异步函数执行完后调用 执行哪个则由用户定义

let pro1 = new Promise((resolve,reject) => {
	console.log('promise');
	
	resolve('success');
	reject('failed');
})

// Promise实例对象的resolve和reject函数的定义则由then方法设置
// 第一个参数是resolve 第二个是reject
pro1.then((mes) => {
	console.log(mes);
},(mes) => {
	console.log(mes);
})// promise success

// catch方法 捕获new Promise 和then中resolve的错误
// 一般会在最后使用catch
pro1.then((mes) => {
	console.log(mes);
	let a1 = 2;
}).catch((e) => {
	console.log(e);
})


// Promise.all()
let p1 = new Promise((res,rej) => {
	res('OK1');
	// rej('err1');
})

let p2 = new Promise((res,rej) => {
	res('OK2');
	// rej('err2');
})

let p3 = new Promise((res,rej) => {
	res('OK3');
	// rej('err2');
})

// all方法用于将多个promise实例整合成一个promise实例 参数为数组形式
let pro2 = Promise.all([p1,p2,p3])
// 所有子实例异步函数都成功执行才会执行res回调函数
// 执行错误则停止执行并通过catch方法输出
pro2.then((res) => {
	console.log(res);
}).catch((e) => {
	console.log(e);
}) // ['OK1','OK2','OK3']

Promise.race([p1,p2,p3]).then((res) => {
	console.log(res);
}).catch((e) => {
	console.log(e);
}) // 'OK1'