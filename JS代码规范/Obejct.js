// 使用字面直接量创建对象

// 不要用保留字做属性名
const obj1 = {
	class:'obj'
}

// 利用同义词代替保留字做属性名
const obj2 = {
	type:'obj'
}

// 使用对象属性值的简写（即如果直接定义好就直接将变量名写入对象中）
const justiceleague = 'justice league';
const obj3 = {
	justiceleague
}

// 如果有简介的属性也有非简写的属性，则先把简写的属性分组好写在
const legionofdoom = 'legionofdoom';
const obj5 = {
	justiceleague,
	legionofdoom,
	avengers:'avengers',
	sucidesquad:'sucidesquad'
}

//使用方法的简写 直接用 函数名(){} 定义方法
const obj4 = {
	add() {
		console.log('add');
	}
}

console.log(obj5);
obj4.add();