// ES6的类就相当于原型 
// 在方法前面加上static 就说明该方法是类方法
class AA{
	constructor(x,y) {
		this.name = x;
		this.age = y;
	}
	getA() {}
	static getB() {
		console.log('111')
	}
}

// new AA().getB(); // 报错
AA.getB();// 111

// 类方法可以被子类继承
class BB extends AA {
	constructor(x,y) {
		super(x,y);
	}
	static getB() {
		super.getB();
	} 
}

BB.getB();

// 通过class添加的方法虽然是在原型中的，但无法通过for...in枚举
class FF {
	constructor() {

	}
	ff() {

	}
}

for(let k in new FF()) {
	console.log(k);
}

function KK() {

}
KK.prototype.kk = () => {

}

for(let k in new KK()) {
	console.log(k); // kk
}
