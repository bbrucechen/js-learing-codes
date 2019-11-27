// 通过.访问属性
const obj = {
	name:'bruce',
	age:18
}
console.log(obj.name);


// 当通过变量访问属性时，用中括号访问
function readAttr(name) {
	return obj[name];
}
console.log(readAttr('name'));