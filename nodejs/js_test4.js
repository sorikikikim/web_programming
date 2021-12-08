//함수형 프로그래밍
//함수 리턴하기
const returnFunction = () => (a, b) => a + b; 
const plus = returnFunction();
// plus = (a, b) => a + b;
console.log(plus(10, 20));

//재귀함수 : 1-n 더하기
const sumNumber = (start, end, accumulator) => { 
	if (start > end)
		return accumulator;
	console.log(`${accumulator} + ${start} = `, accumulator + start);
	return sumNumber(start + 1, end, accumulator + start);
};
console.log('result:', sumNumber(1, 10, 0));

//재귀함수로 합 구하기
const scores = [85, 95, 76];
const sum = (list, total, index) => { 
	if (index === list.length)
		return total;
		console.log(`${total} + ${list[index]} =  `, total + list[index]);
	return sum(list, total + list[index], index + 1);
};
console.log('sum:', sum(scores, 0, 0));

function grandParent(g1, g2) { 
	const g3 = 3;
	return function parent(p1, p2) {
		const p3 = 33;
		return function child(c1, c2) {
			const c3 = 333;
			return g1 + g2 + g3 + p1 + p2 + p3 + c1 + c2 + c3;
		};
	}; 
}

const parentFunction = grandParent(1, 2);
const childFunction = parentFunction(11, 22); 
console.log(childFunction(111, 222));
// 1 + 2 + 3 + 11 + 22 + 33 + 111 + 222 + 333 == 738

//합성함수
const multiple5 = x => x * 5; 
const add10 = x => x + 10;
const plus1 = (a, b) => a + b; 
const minus = (a, b) => a - b;
console.log(multiple5(add10(20))); 
console.log(minus(plus1(10, 20), 40));
// (20 + 10) * 5 // (10 + 20) - 40

//커링 : 화살표 이중으로 있음
const add = x => y => x + y; 
const add1 = add(10);
console.log(add1(20)); 
console.log(add(10)(20));

//커링 1
const coffeeMachine = liquid => espresso => `${espresso} + ${liquid}`; 

const americanoMachine = coffeeMachine('water');
const latteMachine = coffeeMachine('milk');
const americano = americanoMachine('coffee bean');
const latte = latteMachine('coffee bean');

const greentea = americanoMachine('tea bag');
const greebteaLatte = latteMachine('tea bag');

console.log(americano); 
console.log(latte);
console.log(greentea);
console.log('Greentea Latte = ', greebteaLatte);

//커링 2
/*
const fs = require('fs');
const openFileAndPrint = path => fileName => fs.readFile(path + fileName, (err, data) => {
if (err) throw err;
console.log(data.toString()); });
const thisDirOpenFileAndPrint = openFileAndPrint('./'); 
const parentDirOpenFileAndPrint = openFileAndPrint('../'); 
thisDirOpenFileAndPrint('js_test2.js'); 
parentDirOpenFileAndPrint('4.css');*/

//true false 만을 리턴하는 함수
const isApple = (fruit) => {
	if (fruit === 'apple') 
		return true; 
	return false;
};
console.log(isApple('apple'));

//predicate
const numbers = [1, 2, 19, 38, 4, 98, 25];
const isFirstBiggerThenSecond = (first, second) => {
	if (first > second) 
		return true;
	return false; 
};
const sortedNumbers = numbers.sort(isFirstBiggerThenSecond); 
console.log(sortedNumbers);


//filter() 함수
//array.filter(item => 조건)
//array 에서 원소 하나(item)씩 조건 검사를 하여 true인 것만 push() 하는 방식
const ages = [11, 12, 13, 16, 21, 31];
const upper16 = ages.filter(age => age > 16);
const under13 = ages.filter(age => age < 13)
const between12And21 = ages.filter(age => age > 12 && age < 21);
console.log('upper16:', upper16); 
console.log('under13:', under13); 
console.log('between12And21:', between12And21);

const upper15 = [];
for (let i = 0; i < ages.length; i++) {
	if (ages[i] > 15) {
		upper15.push(ages[i]);
	}
}
console.log(upper15);

//map() 함수
//array.map(item => action)
//array 에서 원소 하나(item)씩 action을 실행하여 push() 하는 방식
// define
const list = [1, 2, 3];
// process
const multipledList = list.map(item => item * 10);
 multipledList.forEach(item => console.log(item));
//예시
const listEmployee = [
	{ name : 'ksr', age : 25, salary : 4000},
	{ name : 'nhy', age : 21, salary : 5000},
	{ name : 'kth', age : 27, salary : 6000}
];

const raisedSalaryList = listEmployee.map(employee => (employee.salary * 1.1));
raisedSalaryList.forEach(salary => console.log('salary : %d', salary));

//reduce() 함수
// array.reduce(action, init_value)
// array 원소 하나(item)씩 action을 실행
// 첫 원소를 이용할 때는 init_value 이용 -> result 생성
// 이 후 원소 부터는 result와 item을 이용하여 action 실행 
// 최종 result를 리턴 -> array의 모든 원소를 하나로 줄임
const scores1 = [10, 20, 30, 40, 50];
const sum1 = scores1.reduce((a, b) => (a + b));
const sumWithInitValue = scores1.reduce((a, b) => (a + b), 10);
console.log('sum :', sum1); 
console.log('sumWithInitValue :', sumWithInitValue);

//reduce함수 예
const students = [
	{ name : 'ksd', age : 31, score : 85 },
	{ name : 'ksr', age : 12, score : 95 },
	{ name : 'csh', age : 35, score : 76 },
];
const scores2 = students.map(student => student.score);
const sum2 = scores.reduce((a, b) => a + b, 0);
console.log('score : ', scores2);
console.log('sum : ', sum2); 

//Examples
//80점 이상 학생들의 점수 합 구하기
//80점 이상 학생들 고르기 : filter()
//선택한 학생들의 점수만 추출하기 : map()
//합 구하기 : reduce()
const studentsEx = [
	{ name : 'ksd', age : 31, score : 85 },
	{ name : 'ksr', age : 12, score : 95 },
	{ name : 'csh', age : 35, score : 76 },
];

const st = studentsEx.filter(s=> s.score >= 80);
const scoreSt = st.map(s => s.score);
const sumSt = scoreSt.reduce((a, b) => a + b, 0);
console.log('80점 넘는 학생들 점수의 합  :', sumSt);

const upper80Sum = studentsEx.filter(s => s.score >= 80)
							.map(s => s.score)
							.reduce((a, b) => a + b, 0);
console.log('80점 넘는 학생들 점수의 합  :', upper80Sum);

//개발팀의 나이 합계 구하기
//개발 팀원 고르기 : filter()
//선택한 직원들의 나이만 추출하기 : map()
//합 구하기 : reduce()

const employees = [
	{ name : 'sfg', age : 35, team : 'development' }, 
	{ name : 'flk', age : 33, team : 'design' }, 
	{ name : 'hjd', age : 41, team : 'cs' }, 
	{ name : 'npj', age : 24, team : 'design' }, 
	{ name : 'odf', age : 57, team : 'development' }, 
	{ name : 'ksd', age : 23, team : 'development' }, 
];

const developTeam = employees.filter(e => e.team === 'development');
const ageOfDev = developTeam.map(e => e.age);
const sumOfAge = ageOfDev.reduce((a, b) => a + b, 0);
console.log('development team : ', developTeam);
console.log('developer age : ', ageOfDev);
console.log('sum of developer age : ', sumOfAge);

const developerAgeList = employees
		.filter(employees => employees.team === 'development')
		.map(employees => employees.age);
console.log(developerAgeList.reduce((a, b) => a + b));

//21세 이상 30세 미만의 점수 평균 구하기
//21 <= age < 30 힉셍 고르기 : filter()
//선택한 학생들의 점수만 추출하기 : map()
//평균 구하기 : reduce()

const students1 = [
	{ name : 'sfg', age : 35, score : 52 }, 
	{ name : 'flk', age : 29, score : 91 }, 
	{ name : 'hjd', age : 41, score : 63 }, 
	{ name : 'npj', age : 24, score : 92 }, 
	{ name : 'odf', age : 57, score : 77 }, 
	{ name : 'ksd', age : 23, score : 58 }, 
];

/*const students2130 = students1
	.filter(a => a.age >= 21 && a.age < 30)
	.map(a => a.score)
	.reduce();

//const average = students2130 / students2130.length;
*/