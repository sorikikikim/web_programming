//1. replace(), 문자열 바꾸기
const greeting = 'hello';
const dateString = '2017-08-24T11:00:00'; 
const smallBracket = '()';

const replacedGreeting = greeting.replace('el', '');
const replacedDateString = dateString. replace('T', ' ');
const middleBracket = smallBracket. replace('(', '{'). replace(')', '}');

console.log('el 없애기 : %s', replacedGreeting); 
console.log('T를 공백으로 : %s', replacedDateString); 
console.log('() => {} : %s', middleBracket);

//2. split(), 문자열 나누기
const dateString1 = '2017-08-24 11:00:00'; 
const date = dateString1.split(' ')[0];
const time = dateString1.split(' ')[1];
console.log('date : %s', date); 
console.log('time : %s', time);
const result = 'abc'.split('b'); 
console.log('result:', result);

//3. substring(), 문자열 추출하기
const string = 'abcdefghijklmnopqrstuvwxyz';

const substring1 = string.substring(0, 4); 
const substring2 = string.substring(8, 11); 
const substring3 = string.substring(24, 25);
console.log('0, 4:', substring1); 
console.log('8, 11:', substring2); 
console.log('24, 25:', substring3);

//4. Number(), 숫자로 바꾸기
const order1 = { no: 1, productName: '티셔츠', price: '30000' }; 
const order2 = { no: 2, productName: '청바지', price: '45000' }; 
const order3 = { no: 3, productName: 'shoes', price: '55.70' }; 
const order4 = { no: 4, productName: 'sunglass', price: '120.80' }; 

const concatenate = order1.price + order2.price;
const sum1 = parseInt(order1.price, 10) + parseInt(order2.price, 10);
const sumParseInt = parseInt(order3.price, 10) + parseInt(order4.price, 10);
const sumNumber = Number(order3.price) + Number(order4.price); 

console.log("order1['price'] + order2['price'] : %s", concatenate); 
console.log("parseInt(order1['price']) + parseInt(order2['price']) : %s", sum1); 
console.log("parseInt(order3['price']) + parseInt(order4['price']) : %s", sumParseInt);
console.log("Number(order3['price']) + Number(order4['price']) : %s", sumNumber);

//Array 관련 함수
//5. reverse(), 배열 뒤집기
const numbers = [1, 2, 3, 4]; 
numbers.reverse(); 
console.log('numbers:', numbers); //4, 3, 2, 1

const stringArray = 'hello'.split(''); //split을 해야지 reverse 가능
stringArray.reverse(); //olleh
console.log('stringArray:', stringArray);

//6. sort(), 배열 정렬하기 (오름차순)
const numbers1 = [13, 6, 200, 8, 1]; //크기순이 아닌 아스키 순
const strings1 = [ 'timeoutsRemaining', 'flagrantFouls',
'defensive3Seconds', 'jumpshots', 'dunks', 'layups']; 
const sortedNumbers = numbers1.sort();
const sortedStrings = strings1.sort(); 

console.log('sortedNumbers:', sortedNumbers);
console.log('sortedNumbersDesc:', sortedNumbers.reverse());
console.log('sortedStrings:', sortedStrings);
console.log('reverseSortDesc:', sortedStrings.reverse());

//7. sort(), 배열 정렬하기 (다른조건)
const studentList = [
	{ name : 'ksr', age : 24, math : 86, english : 92 },
	{ name : 'lsf', age : 22, math : 67, english : 62 },
	{ name : 'hsk', age : 28, math : 43, english : 53 },
	{ name : 'bfb', age : 20, math : 85, english : 67 },
	{ name : 'afe', age : 24, math : 76, english : 93 },
	{ name : 'sdb', age : 23, math : 29, english : 100 }
];

studentList.sort((beforeStudent, nextStudent) => {
	if (beforeStudent.age > nextStudent.age) return 1;
	else if (beforeStudent.age < nextStudent.age) return -1;
	else if (beforeStudent.math > nextStudent.math) return -1;
	else if (beforeStudent.math < nextStudent.math) return 1;
	return 0;
});

console.log(studentList);
studentList.sort((now, next) => now.math - next.math);
console.log('studentList : ', studentList);

//8. JSON 객체 정렬
/*studentList.sort((now, next) => now.math - next.math);
console.log('studentList : ', studentList);

const compare = (now, next) => {
	console.log('---------------------------------------------------------');
	console.log('now  :', now);
	console.log('next :', next);
}
studentList.sort(compare);*/

//9. slice(), 필요한 부분 뽑기
const studentList1 = [
	{ name : 'ksr', age : 24, math : 86, english : 92 },
	{ name : 'lsf', age : 22, math : 67, english : 62 },
	{ name : 'hsk', age : 28, math : 43, english : 53 },
	{ name : 'bfb', age : 20, math : 85, english : 67 },
	{ name : 'afe', age : 24, math : 76, english : 93 },
	{ name : 'sdb', age : 23, math : 29, english : 100 }
];
//slice(start_index, end_index+1)
const reversed = studentList1.reverse(); 
console.log('reversed = ', reversed);
const sliced = studentList1.slice(0, 3); 
console.log('sliced = ', sliced);
//console.log(`reversed = ${reversed}`); 
//console.log(`sliced = ${sliced}`);

//10. concat(), 배열 합치기
const part1 = ['kyeongrok', 'minsup'];
const part2 = ['jihyun', 'yuna'];
const part3 = ['dasom', 'mattheue'];
const team1 = part1.concat(part2);
const team2 = part1.concat(part2, part3); 
console.log('team1:', team1); 
console.log('team2:', team2);

//Time 관련 메소드
//11. setInterval(fn, milsec), 정기적으로 실행하기
// 1초에 1번씩 'hello'출력하기 
const set = setInterval(() => console.log('hello~'), 10000);
// 2초에 1번씩 bye출력하기
const printBye = () => console.log('bye'); 
setInterval(printBye, 5000);




//12. clearInterval(fn), 정기적 실행 취소하기
const playInterval = setInterval(() => console.log('hello1'), 1000); 
setTimeout(() => { clearInterval(playInterval); }, 5000);

//13. setTimeout(fn, milsec), 몇 초 후 실행하기
// 3초 후에 hello를 한번 출력하고 종료한다. 
setTimeout(() => console.log('hello!!!'), 3000);
