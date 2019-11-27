
let p = new Promise((resolve,reject) => {
	resolve('黑暗骑士');
	// reject('hh')
})

// p.then((res) => {
// 	console.log(res + 'jaja');
// }).catch((e) => {
// 	console.log(e);
// })

async function getA() {
	// await 后面接上一个promise实例 
	// 只能在async函数中使用？
	// 作用是同步等待实例异步函数执行完毕然后获取实例中回调函数resolve/reject的参数
	// 本质是语法糖，让我们可以不用then就获取实例中异步函数执行完毕后的数据
	// 所以promise里函数执行完后想要处理的数据应作为res的参数 然后在外面再通过await调出来
	let name = await p;
	// console.log(typeof name);
	return name;
}

getA().then((res) => {
	console.log(res + 'haha');
}).catch((e) => {
	console.log(e)
})