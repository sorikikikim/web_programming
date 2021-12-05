function changeName(o) {
	o.name = 'ksr';
}

const ellie = {name: 'ellie'};
console.log(ellie);
console.log(ellie.name);

changeName(ellie);
console.log(ellie);
console.log(ellie.name); //이름만 출력

//Default parameters
function showMessage(message, from) {
	console.log(`${message} by ${from}`);
}

function showMessage(message, from) {
	if (from == undefined){
		from = 'unknown';
	}
	console.log(`${message} by ${from}`);
}

function showMessage(message, from='unknown') {
	console.log(`${message} by ${from}`);
} //from 인자를 안주면 자동으로 unknown

showMessage('Hi!');
showMessage('Hi!', 'sori');

//Rest parameters
function printAll(...args) { //배열
	for (let i = 0; i < args.length; i++) { //구식
		console.log(args[i]);
	}
	console.log('----------');
	for (const arg of args) {
		console.log(arg);
	}
	console.log('----------');
	args.forEach((arg) => console.log(arg)); //가장 간결, 최신 => 사용
}

printAll('0', 'dream', "coding", 200, 'sori-kim');

//Scope
//안에서는 밖을 볼 수 있음 - 밖에서는 안을 볼 수 없음
//**Closer : 중첩된 함수에서 자식 함수가 부모 함수에 정의된 변수를 접근할 수 있는 것
/*
예) function f() {
	var a = 0;
	for (let i = 0; i < 5; i++) {
		console.log (a + "," + i);
		a++; //자식 함수에서는 부모 변수에 접근 가능
	}
	//for문 밖에서는 i에 접근 불가
}
 */

let globalMessage = 'global';
function printMessage() {
	let message = 'Hello';
	console.log(message);
	console.log(globalMessage);
	function printAnother() {
		console.log(message); //부모 함수의 변수에 접근 가능 = closer
		let childMessage = 'child';
		console.log(childMessage);
	}
	printAnother();
}
printMessage();
//printAnother(); 밖에서는 안을 볼 수 없음 = scope

//First-class function : function은 variable과 같이 다룰 수 있음
//변수 값이 될 수 있음, parameter로 전달될 수 있음, 함수에서 return 될 수 있음
const print1 = function() {
	console.log('print');
}
print1();
let printAnother1 = print1;
const printAnother2 = print1;
printAnother1();
printAnother2();

//Callback function 
//callback = 함수를 전달해서 상황에 따라 적절한 함수를 호출하도록 하는 것
//전달된 함수들 = 콜백함수
const printYes = function() {
	console.log('yes');
};

const printNo = function() {
	console.log('no');
};

function randomQuiz(answer, f1, f2) {
	if (answer == 'love you') {
		printYes();
	}
	else {
		printNo();
	}
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

//Arrow fuction
const printY = () => console.log('yes');
const add = (a, b) => a + b;
console.log(add(6, 8));
