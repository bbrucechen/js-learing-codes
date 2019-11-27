console.log(Array.isArray([1,23,3]))

// Array.of
// Array.of与Array一样 返回一个数组 但是只有一个参数时也是返回一个数组
const arr1 = Array.of(7);
const arr2 = Array(7);
console.log(arr1,arr2);

// every  返回布尔值 判断数组每个值是否都符合函数内的判断条件 
const isBig = [1,2,-1].every((value,index) => {
	return value > 0;
})
console.log(isBig);

// includes  返回布尔值 判断是否目标数组组是否包含某个值
// 参数1 查找的值 参数2 查找开始位置
console.log([1,3,4,1].includes(1,1));

// filter 返回数组 过滤出符合函数筛选条件的数值 
const ret1 = [1,2,3].filter((value,index) => {
	return value > 1;
})
console.log(ret1);

// find 返回直接量 只返回找到的第一个符合函数内筛选条件的值
const ret2 = [2,3,4,5,6,7].find((value,index) => {
	return value > 2 && index > 4;
})
console.log(ret2);

// findIndex 返回number 回找到的第一个符合函数内筛选条件的值的索引
const ret3 = [3,4,5].findIndex((value,index) => {
	return value === 5;
})
console.log(ret3);

// some
const ret4 = [4,5,6].some((value,index) => {
	return value >= 8;
})
console.log(ret4);

// copyWithin 用数组中的某些内容该数组的某些内容
// copyWithin(替换的目标的起始位置，替换内容的起始位置，替换内容的结束位置（不包括该位置）)
let arr3 = [1,2,3,4,5,6,7,8]
arr3.copyWithin(4,2,5);
console.log(arr3);

// fill 用给定内容替换数组内容
// fill(替换内容，替换开始位置，替换结束位置（不包括）)
// 所有数组方法的结束位置参数都是不包括在内 即顾前不顾后
console.log(arr3.fill('1',3,5));

// reduce 迭代 直接从第二项开始迭代
// 参数1 上一次迭代return的值 参数2 当前值
let arr4 = [1,2,3,4,5,6]
const sum = arr4.reduce((prev,item) => {
	console.log(item);
	// console.log(prev);
	return item + prev;
})
console.log(sum);

// reduceRight 跟reduce一样 但是是从右边开始
let arr5 = [1,2,3,4,5,6]
const sum2 = arr5.reduceRight((prev,item) => {
	console.log(prev);
	return prev - item;
})
console.log(sum2);


// keys 用于for...of...遍历数组每一项的索引值 默认遍历的是值
let arr6 = [1,2,3,4,5,6]
for(let k of arr6.keys()) {
	console.log(k);
}

for(let v of arr6) {
	console.log(v);
}

// entries 用于for...of...遍历数组每一项的索引值和数值 返回数值形式
for(let k of arr6.entries()) {
	console.log(k);
}

// 可配合解构使用
for(let [index,value] of arr6.entries()) {
	console.log('index' + index);
	console.log('value' + value)
}

