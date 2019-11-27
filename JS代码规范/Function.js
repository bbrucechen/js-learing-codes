// 使用函数声明代替函数表达式 因为函数声明是可命名的，所以他们在调用栈中更容易被识别。此外，函数声明会把整个函数提升（hoisted），而函数表达式只会把函数的引用变量名提升。这条规则使得箭头函数可以取代函数表达式
function add(x,y) {
	return x+y;
}

// 永远不要在一个非函数代码块（if、while 等）中声明一个函数,而是把那个函数赋给一个变量。
if(true) {
	const fn = () => {
		return 'function'
	};
}

// 不要把函数形参命名为arguments

// 不要使用arguments，而是用...运算符 使用 ... 能明确你要传入的参数。另外 rest 参数是一个真正的数组，而 arguments是一个类数组。
function concatenateAll(...args) {
    return args.join('');
  }

// 直接给函数的参数设定默认值，不要使用变化的函数参数
function deleteF(obj={}) {
	return obj;
}
console.log(deleteF({name:'bruce'}));
console.log(deleteF());

// 当要传递一个函数给变量或使用匿名函数时，使用箭头函数
var fun = (x,y) => {
	console.log(x+y);
}
fun(1,2);

[1,2,3].forEach((value,index) => {
	console.log(value);
});

// 如果函数体能够一行写完(即只有一个return语句）且只有一个参数，那么小括号和中括号和return都省略掉 增强可读性
[1,2,3].map(x => x * x);