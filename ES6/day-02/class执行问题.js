function BB(name) {
	this.name = name;
}

let bb = new BB('珠峰');

class AA{
	constructor(name) {
		this.name = name;
	}

}

let aa = new AA('珠峰培训');
console.log(aa.name);

// 立即执行class构造函数
let a1 = new class{
	constructor(name) {
		this.name = name;
	}
}('heihei');

console.log(a1.name);// heihei