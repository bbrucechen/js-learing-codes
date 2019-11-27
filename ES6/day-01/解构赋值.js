const {name,arr} = {name:'name',arr:[1,2,3]};
console.log(arr);

// 使用数组解构，如果右边不是数组，则将其转为类数组（必须有length属性)
const [a,b,c] = 'wwe';
console.log(a,b,c);

// 使用对象解构，如果右边不是对象，则将其转为对象（必须有length属性)
let {k} = 1; 
console.log(k); //undefined

let {length} = 'heihei';
console.log(length);

let {__proto__} = [1,2,3];
console.log(__proto__);

// 函数参数的解构赋值
function get([a,b,c,d]) {
	console.log(a,b,c,d);
}

get([1,2,3,4]);

function Obj({name,age}) {
	console.log(name,age);
}

Obj({name:'bruce',age:18});



