let name = 'bruce';
let age = 20;

// 简写赋值
let school = {name,age};
let obj = {
	fn(){}
}

// 属性名使用[] 里面就可以使用变量
let str = 'name';
let obj2 = {
	[str]:name
}
console.log(obj2.name) // bruce

// Object 扩展方法

// Object.assign 合并对象
let obj3 = {
	age:20,
}
let obj4 = Object.assign(obj2,obj3);
console.log(obj4);

// 可以利用该方法实现浅拷贝
let obj5 = {}
let obj6 = Object.assign(obj5,obj4);
console.log(obj6)


// 对象也可以使用扩展运算符
let obj11 = {name:'clark'};
let obj22 = {age:20}
let obj33 = {...obj11,...obj22};
console.log(obj33);

// Object.getOwnPropertyDescriptor() 获取某个对象的某个属性值的属性描述符
console.log(Object.getOwnPropertyDescriptor(obj33,'age'));

// Object.keys 返回对象的属性名 数组形式
console.log(Object.keys(obj33));

// Object.values 返回对象的属性值 数组形式
console.log(Object.values(obj33));

// Object.entries 返回对象的属性和值  二维数组形式
console.log(Object.entries(obj33));
