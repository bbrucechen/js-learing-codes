// 转换成字符串使用隐式转换
const str = 1 + '';

// 使用parseInt转换成数字时带上转换基数参数
const num = parseInt('123',10);

// 转换成布尔值 可以用Boolean或者！！
const num1 = 0;
const boo = Boolean(num1);
const boo1 = !!0;

console.log(boo);
console.log(boo1);