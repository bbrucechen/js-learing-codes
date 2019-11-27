// 将可遍历数值变成数组
let str = '123';
console.log([...str]);

function arg() {
	console.log([...arguments]);
}

arg(1,2,3);
// 将数组变成非数组
let arr1 = [1,2,3];
console.log(...arr1);
