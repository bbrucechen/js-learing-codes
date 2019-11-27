/*{
	let a = 10;
	var b = 20;
}

console.log(a); // a is not defined;
console.log(b); // 20*/

// for(let i = 0; i < 3 ;i ++) {
// 	let i = 'abc';
// 	console.log(i);
// }

// let [a,b=true] = [1,null];
// console.log(a);
// console.log(b);

// function fn() {
// 	return 'aaa';
// }

// let [k=fn()] = [1];
// console.log(k);

// let [a=1,b=a] = [1];
// console.log(a,b);// 1 1

// let [x = 1,y = x] = [];
// console.log(x,y);// 1 1

// let [a = 1,b = a] = [1,2];
// console.log(a,b) // 1 2

// let [m = n,n = 1] = [];
// console.log(m,n);// n is not defined

// let {name:name,age:age} = {name:'bruce',age:20};

// let obj = {
// 	p: [
// 	'hello',
// 	{y:'world'}
// 	],
// }

// let {p:[x,{y}]} = obj;
// console.log(x + y);

// let {a = 1} = {a:undefined};
// console.log(a);

// let {b = 2} = {b:null}
// console.log(b);

// let str  = 'xxx'.padStart(5,'ab');
// console.log(str);

// let str1 = 'xxx'.padEnd(6,'abbaaaaa');
// console.log(str1);

// let str = 'world';
// console.log(String.raw`hello${str}`);

// let reg = /(?<=\$)\d+/g;
// console.log('%hello'.replace(reg,'world'));

// console.log(0o767 === 503)
// console.log(0b011 === 3)
// console.log(Number(0o767))

// function Star(x=0,y=0) {
// 	this.x = x;
// 	this.y = y;
// }

// let star = new Star();
// console.log(star.x,star.y);

// function foo({x,y=5}) {
// 	console.log(x,y);
// }

// foo();
// foo({});
// foo({x:5})
// foo({x:5,y:6})

// function fetch({x,y=5} = {}) {
// 	console.log(x,y);
// }

// fetch();
// fetch({});
// fetch({x:3});
// fetch({x:3,y:10});

// let foo = function(x,y=2,z,k=1) {}
// console.log(foo.length);

// function foo(x,...args) {
// 	console.log(...args);
// }

// foo(1,2,3,4);


// function Big() {
// 	return 'Big';
// }

// console.log(Big.name);

// var age = 100;
// var obj = {
// 	age: 20,
// 	say: function() {
// 		(() => {
// 			console.log(this.age);
// 		})()
// 	}
// }
// obj.say();

// function 

// let arr1 = [...'bruce'];
// console.log(arr1);

// let arr1 = [...{'name':bruce,'length':3}];
// let arr1 = Array.from({
// 	0:'bruce',
// 	length:1
// })
// console.log(arr1);


// let arr2 = [1,2,3,4];
// arr2.fill('a');
// console.log(arr2);

// let arr = [1,2,3,4];

// for(let k of arr.keys()) {
// 	console.log(k);
// }

// for(let k of arr.values()) {
// 	console.log(k);
// }

// for(let k of arr.entries()) {
// 	console.log(k);
// }
/*let obj = {
	name:'bruce',
}

let proto = {
	add () {
		console.log('1');
	}
}

Object.setPrototypeOf(obj,proto);

obj.add();

console.log(Object.getPrototypeOf(obj));

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));*/

// let {x,y,...z} = {x:1,y:2,a:3,b:4};
// console.log(z);

// let obj = {a:{b:2}}
// let {...x} =  obj;
// obj.a.b = 1;
// console.log(x.a.b);


// let obj = {x:1,y:2};
// let obj1 = {...obj};
// console.log(obj1);

// let sym1 = Symbol('foo');
// let sym2 = Symbol('bar');
// console.log(sym1);
// console.log(sym2);

// let sym3 = Symbol('foo');
// // console.log(sym3 === sym2);

// let obj = {
// 	[sym1]:'bruce',
// 	[sym2]:'clark'
// }
// console.log(obj[sym1]);
// console.log(obj.sym2);

// obj[sym3] = 'diana';
// console.log(obj);

// // console.log(Symbol.for('bruce') === Symbol.for('bruce'));
// let sym4 = Symbol.for('foo');

// console.log(Symbol.keyFor(sym3));
// console.log(Symbol.keyFor(sym4))

// let proxy = new Proxy({},{
// 	get:function() {
// 		return 45;
// 	}
// })

// let proxy = new Proxy({},{})
// proxy.name = 'bruce';
// console.log(proxy.name)

// proxy 实现 属性设置的限制
// let obj = {
// 	name:'bruce',
// 	age:20
// }

// let proxy = new Proxy(obj,{
// 	set:function(target,propKey,value,receiver) {
// 		if(propKey === 'age') {
// 			if(value >= 100) {
// 				return new Error('exceed the limit!')
// 			} else {
// 				target[propKey] = value;
// 			}
// 		}
// 	}
// })
// proxy.age = 90;
// console.log(obj.age);




// let arr  =[1,2,3,4];
// let proxy = new Proxy(arr,{
// 	get:function(target,prop,receiver) {
// 		if(Number(prop) < 0) {
// 			return target[target.length+Number(prop)];
// 		} else {
// 			return target[prop];
// 		}
// 	}
// })
// console.log(proxy[-4]);

// let p1 = new Promise(function(res,rej) {
// 	setTimeout(() => {res('p1')},3000);
// })

// let p2 = new Promise(function(res,rej) {
// 	setTimeout(() => {res('p2')},1000);
// })

// let p3 = Promise.race([p1,p2]).then((res) => {
// 	console.log(res);
// }).catch((err) => {
// 	console.log(err);
// })

// let arr = [1,2,3];
// for(let k of arr){
// 	if(k > 1) break;
// 	console.log(k);
// }

// console.log(arr);

// let set = new Set(['red','blue','green'])
// for(let k of set) {
// 	console.log(k);
// }

// let map = new Map([['color1','red'],['color2','green'],['color3','blue']]);
// for(let k of map.entries()) {
// 	console.log(k);
// }

// function timeout(ms) {
// 	setTimeout(()=>{},ms);
// // }

// async function whatName(ms) {
// 	await new Promise((res) => {
// 		setTimeout(res,ms);
// 	})
// 	return 'bruce';
// }

// whatName(5000).then((res) => {
// 	console.log(res);
// }).catch((e) => {
// 	console.log(e);
// })

// async function getName() {
	
// }

// getName().then((res) => {
// 	console.log(res);
// })

// async function fn() {
// 	await new Promise((res) => {
// 		res();
// 	})
// 	await new Promise((res) => {
// 		res();
// 	})
// 	return 'successed!';
// }

// fn().then((res) => {
// 	console.log(res);
// }).catch((e) => {
// 	console.log(e);
// })

class Big {
	static big() {
		console.log("i'm private!");
	}
}
// console.log(Big.big);
Big.big();