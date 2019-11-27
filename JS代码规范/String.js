// 使用单引号表示字符串
const str1 = 'batman';

// 字符串超过80行时用'+'连接
const str2 = 'i am the knight i am the revenge i am the batman i am your father'
+ 'i will hunt you down you mother fucker';

// 程式化生成字符串时，使用`` (更为简洁直观 可读性更好 )
function returnStr(str) {
	return `my name is ${str}`;
}
console.log(returnStr('bruce'));