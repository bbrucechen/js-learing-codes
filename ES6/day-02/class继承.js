class OBJ1 {
	constructor(x) {
		this.x = x;
	}
	getX() {
		console.log(this.x);
	}
	static getY() {
		console.log(this); // 这里的this指向类函数
	}
}

class OBJ2 extends OBJ1 {
	constructor(x,y) {
		super(x,y);
		this.y = y;
	}
	getX() {
		super.getX();
	}
	static getY() {
		super.getY();
	}
}

let obj1 = new OBJ2(10,20);
console.log(obj1.x,obj1.y)// 10 20
obj1.getX();//10
OBJ2.getY();// Function OBJ2





