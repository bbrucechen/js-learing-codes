// 使用解构存取和使用多属性对象(这样可以减少临时引用对象属性，使代码更简洁)
const obj1 = {
	firstName:'a',
	lastName:'b'
}

function getFullName(obj) {
    const {firstName,lastName} = obj;
    return `${firstName} ${lastName}`;
  }

console.log(getFullName(obj1));

// 当引用数组的值时也使用数组解构
const arr = [1,2,3];
const [num1,num2,num3] = arr;
console.log(`${num1} ${num2} ${num3}`);

// 需要回传多个值时，使用对象解构，而不是数组解构。因为对象解构不需要考虑数据的顺序，可以任意提取数据
function returnValue() {
	const obj = {
		left:1,
		right:2,
		top:3,
		bottom:4
	}
	const {left,right,top,bottom} = obj;
	return {left,right,top,bottom};
}

const {left,top} = returnValue();
console.log(`${left} ${top}`);