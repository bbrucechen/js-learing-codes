// 使用class来构造类 避免直接操作prototype
class Hero {
	constructor(name) {
		this.name = name;
	}
	intraaa() {
		return `my name is ${this.name}`;
	} 
}

const batman = new Hero('batman');
console.log(batman.name);
console.log(batman.intraaa());

// 使用extend继承 因为extend是内建的继承发放且不会破坏instanceof
class Badguy extends Hero {};
const luthor = new Badguy('luthor');
console.log(luthor.name);

// 在方法里最好return this 以便于链试调用

// 可以写一个自定义的toString方法