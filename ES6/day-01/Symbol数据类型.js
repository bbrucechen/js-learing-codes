// Symbol 是一个基本数据类型 可以通过typeof识别
// Symbol() 直接创造Symbol数值
// Symbol创造的每一个数据都是独一无二的
let sym1 = Symbol();
let sym2 = Symbol();

// Symbol函数可接受一个参数 用以描述当前Symbol值
let sym3 = Symbol('one');
let sym4 = Symbol('one');
console.log(sym3 === sym4);

// 用途：当做对象的属性
let obj = {
	[sym1]:'zhufeng',
}
obj[sym2] = 'zhufeng';
console.log(obj);

// Symbol不可以进行数值运算
// console.log(Symbol(3) +1);
// console.log(Symbol('1') + 'bruce')

// 可转为布尔值
console.log(!Symbol('1'));

// Symbol.for(参数) 如果之前有相同参数的Symbol值，则返回这个值，否则则创建一个新的Symbol 
let zf1 = Symbol.for('zhufeng');
let zf2 = Symbol.for('zhufeng');
console.log(zf1 === zf2);

// Symbol.keyFor(Symbol值) 返回这个symbol值的参数
console.log(Symbol.keyFor(zf2));