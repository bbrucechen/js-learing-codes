// 加在函数生命前方 async函数默认返回一个promise对象
async function getA() {
	// return的内容就是resolve的实参
	// 如果执行出错，则被catch方法捕获
	// throw new Error('fuck');
	// return '珠峰';
}

getA().then((res) => {
	console.log('haha'); // 珠峰
}).catch((e) => {
	console.log(e);// fuck
})