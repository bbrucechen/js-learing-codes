// includes  includes(查找字符，开始查找的位置)
const str1 = 'hello world';
console.log(str1.includes('hello',2)); // false

// startsWith(判断的字符，判断开始位置) endsWith(判断的字符，前几个字里查)
console.log(str1.startsWith('o',4));
console.log(str1.endsWith('o',5));

// repeat 复读
const str2 = str1.repeat(3);
console.log(str2);

// padStart padEnd 补全字符串
// padStart(补全长度，补充字符)    在目标字符串前面补充字符
let str3 = 'ab';
str3.padStart(4,'g');
console.log(str3);
