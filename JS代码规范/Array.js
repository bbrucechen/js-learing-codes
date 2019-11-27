// 使用直接量创建数组
const array1 = [1,2,3,4];

// 向数组添加元素时使用push代替索引值赋值
array1.push(5);

// 用扩展运算符复制数组
const array2 = [...array1];
console.log(array2);

// 使用Array.from将类数组对象转为数组
// const arrayLike = document.querySelector('img');
// const imgs = Array.from(arrayLike);

const str1 = Array.from('bruce');
console.log(str1);