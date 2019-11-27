// Set 类似于数组 只有值没有键 不会出现重复的值
// 通过构造函数创建实例
// 参数必须是数组或者是类数组或者是有iterable接口
// 没有key 没有索引 无法通过索引获取
// 有 iterable 接口：数组 arguments DOM元素集合 set Map 字符串
let set1 = new Set('abab');
let set2 = new Set([1,2,3,1])
function newSet() {
	console.log(new Set(arguments));
}
newSet(1,2,3,4);
console.log(set1);

// 一些属性
// size 实例的值个数
console.log(set1.size);
// add 添加值
set1.add('c');
console.log(set1); // a,b,c
// delete 删除值
set1.delete('a');
console.log(set1); // b,c
// has 判断是否有某个值
console.log(set1.has('b')); //true
// clear 清除所有值
set1.clear();
console.log(set1);
// forEach 遍历 没有index
set2.forEach((value,index) => {
	console.log(value);
})
// keys 键值 依旧返回值 
for(let key of set2.keys()) {
	console.log(key);
}
// values 属性值
for(let key of set2.values()) {
	console.log(key);
}
// entries 键值对
for(let key of set2.entries()) {
	console.log(key);
}

// 用途
// 数组去重
let ary1 = [1,2,3,2,1];
let ary2 = [...(new Set(ary1))];
console.log(ary2);


let ary3 = [2,3,4,5];
let ary4 = [4,5,6,7];
// 数组并集
console.log([...(new Set([...ary3,...ary4]))]);

// 数组交集
let ret = ary3.filter((val,index) => {
	return ary4.includes(val);
})
console.log(ret);

// 差集
let ret2 = ([...(new Set([...ary3,...ary4]))]).filter((value,index) => {
	return ary3.indexOf(value) == -1 || ary4.indexOf(value) == -1;
})
console.log(ret2);