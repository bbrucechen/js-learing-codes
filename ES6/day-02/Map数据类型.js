// Map 就是映射 代表了两种或同种数据类型的映射关系
// 构造函数方式创建实例
// new Map([[key1,value1],[key2,value2],...])
// 参数是一个二维数组 每一项内嵌数组里有key和value
let map1 =  new Map([[1,'zhufeng']]);
console.log(map1);

// 属性和值可以是任意数值类型 不像对象必须转为字符串
let map2 = new Map([[1,'sz'],[true,'噢诶寻'],[{name:'bruce'},{'age':20}],[[1,2],[1,2]]])
console.log(map2);

// 属性名不可以重复
let map3 = new Map([[true,'name'],[true,'bruce']]);
console.log(map3); // 结果是后面的覆盖旧的

// size 键值对的个数
console.log(map2.size); //4

// 方法  
// map.get(key) 获取key键的映射值，key值不用转为字符串
const age = map2.get(1); 
console.log(age);//sz
const bol = map2.get(true);
console.log(bol);

// map.set(key,value) 给键key设置值value
map2.set(1,'hz');
console.log(map2.get(1));// hz

map2.set(false,'2');
console.log(map2.get(false));// 2

// map.has(key) 判断key键有没有对应的value值
console.log(map2.has(false)); // true

// map.delete(key) 删除key键 返回布尔值 
map2.delete(false);
console.log(map2.has(false));// false

// map2.forEach((value,index,input) => {})  遍历map数据 
map2.forEach((value,index) => {
	console.log([index,value]);
})

// map.clear() 清空所有映射
// map2.clear();
// console.log(map2) // 空Map数据

// map.keys() 获取键值 用于遍历
for(let k of map2.keys()) {
	console.log(k);
}

// map.values() 获取映射值 用于遍历
for(let k of map2.values()) {
	console.log(k);
}

// map.entries() 获取映射对
for(let k of map2.entries()) {
	console.log(k);
}