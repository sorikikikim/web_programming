//1. ECMAScript6 (ES6)
// es5 스타일
function printHelloEs5() {
	console.log('hello es5');
}
// es6 스타일
const printHelloEs6 = () => console.log('hello es6'); 
const printHello = (a, b) => console.log('hello ' + a +" "+ b); 

printHelloEs5(); 
printHelloEs6();
printHello(10, 20);

//2. console.log()
console.log('hello');
console.log('hello', 'bye'); // 여러 개 값 출력하기 

console.warn(`this line ${'can make error'}`);

//3. formatting
console.log('name:%s', 'ksd'); // 템플릿 형식으로 출력하기 console.log('age:%d', 31); // 숫자는 %d
console.log('pi:%d', 3.14); // 숫자는 %d
console.log('math:%d science:%f', 92, 84.5); // 2가지 같이 쓰기 
console.log('name:%s age:%d', 'ksd', 31); // 여러가지 같이 쓰기 
console.log('name:%s math:%d science:%d', 'ksd', 92, 84); // 3가지 같이 쓰기 
console.log('name:%s math:%s science:%s', 'ksd', 92, 84); // %s로 다 쓰기

//4. 백틱 이용한 포맷팅 : '${변수}'
// ES5
var num1 = 1;
var num2 = 2;
var result = 3;
var string1 = num1 + ' 더하기 ' + num2 + '는 \"' + result + '\"입니다.'; 
console.log(string1);

// ES6
const num11 = 1;
const num22 = 2;
let result2 = num11 + num22;
const string2 = `${num11} 더하기 ${num22}는 \"${result2}\"입니다.`;
console.log(string2);

//5. 변수와 상수 선언 : let, const
if (true) {
	var x = `var x`;
} 
console.log(x); 

let y;
if (true) {
	y = `let y`; 
}
console.log(y);
let z = 10;
//const 는 변경되지 않는 값(상수)
console.log(z);
z = 20;

//6. for of
const userList = [
	{ name: 'ksd', age: 31, score: 85 },
	{ name: 'kjh', age: 13, score: 95 },
	{ name: 'pch', age: 35, score: 76 },
];

for (const user of userList) { 
	console.log('user:', user);
}

//7. forEach()
//주어진 함수를 배열 요소 각각에 대해 실행
const userList1 = [
	{ name: 'ksd', age: 31, score: 85 }, 
	{ name: 'kjh', age: 13, score: 95 }, 
	{ name: 'pch', age: 35, score: 76 },
];

userList1.forEach(function(a){ 
	console.log(a);
}); 

console.log('----------------------');

userList1.forEach((user) => console.log(user)); // arrow function

//8. function declarations
function printHello1() { 
	console.log('hello');
} 
printHello1();

const printBye = () => console.log('bye');
printBye();

const add1 = function(x, y) { 
	return x + y; 
}
const add2 = (x, y) => { //function 생략 가능
	return x + y;
} 
const add3 = (x, y) => x + y;  //return 생략 가능
const square = x => x ** 2; //매개 변수 하나의 경우 괄호 생략 가능
const square2 = square; //square() = square2()
console.log(square2(3));
console.log(square(3));

//9. 일급 함수(일급 객체)
function plus(a, b) { 
	return a + b;
}

function minus(a, b) {
	return a - b;
}

let p = plus;
console.log("10 + 20 = %d", p(10, 20));

//함수를 parameter로 받는 함수 
function calculate(a, b, func){
	//매개 변수로 함수 전달 가능
	return func(a, b); 
}

//함수를 넘겨서 계산함 
console.log(calculate(10, 20, minus)); 
console.log(calculate(10, 20, plus));

//10. Arrow function (1)
const printHi = () => console.log('Hi'); // no {} 
const printHi2 = () => 'Hi2'; //return 'Hi2'
const printMessage = message => console.log(message); 
const plus1 = (a, b) => a + b;
const minus1 = (a, b) => a - b; 

printHi();
console.log(printHi2());
printMessage('message');
console.log('plus : %d', plus1(10, 20));
console.log('minus : %d', minus1(10, 20));

//11. Arrow function(2)
const studentList = [
	{ name: 'ksd', age: 31, math: 85, science: 75 }, 
	{ name: 'kjh', age: 31, math: 95, science: 83 }, 
	{ name: 'pch', age: 35, math: 76, science: 98 },
];
const plus2 = (a, b) => a + b; 
studentList.forEach(student => console.log(
	`${student.name} total: ${plus2(student.math, student.science)}`));

//12. Callback function
const sum = (a, b) => a + b; 
const printResult = (result) => {
	console.log(`결과는 ${result} 입니다.`); 
};

const calculationAndPrint = (calculationResult, callback) => { 
	callback(calculationResult);
};
calculationAndPrint(sum(10, 20), printResult);