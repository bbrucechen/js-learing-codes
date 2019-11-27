// 设置函数参数默认值
// function add(参数1=默认值，参数2=默认值)

function fn2({name,age} = {name:'珠峰',age:29}) {
	console.log(name,age);
}
fn2({name:'千锋',age:3000});

// 函数的length只会计算没有设置默认值的形参的个数
console.log(fn2.length)

// 函数类属性name可以返回函数名称
function add() {

}

console.log(add.name);//返回add

console.log(function() {}.name) //返回 ''

const add2 = add.bind(null);
console.log(add2.name); //返回bound add

fn1 = new Function('x,y','return x+y');
console.log(fn1(1,2));
console.log(fn2.name);

let str = '[{"name":"zhufeng"},{"age":1000}]';
let arr = (new Function('return ' + str))();
console.log(arr);

function JSONpar(str1) {
	return str1;
}


let m = 10
let n = 100;
function fn5(x=m,y=n) {
	let m = '朱峰';
	let n = 'es6';
	console.log(x);
	console.log(y);

}

fn5();


// 形参作用域问题
// 形参也属于函数私有作用域 当赋予变量为一个参数默认值时，会先在当前作用域中查找。
let x = 100;
function fn6(x,y=x) {
	console.log(x,y);
}
fn6(1);
