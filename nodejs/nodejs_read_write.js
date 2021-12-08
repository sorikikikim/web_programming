let fs = require('fs');

//read file - 동기식 IO
let data = fs.readFileSync('./chap11/ex11-1.html', 'utf-8');
console.log('파일 읽기 요청!!');
console.log(data);

//비동기식 IO
//1)
const fs2 = require('fs');
fs2.readFile('./structure.html', 'utf-8', (err, data) => {
	console.log(data);
}); //읽는데 오래걸리기 때문에
console.log('file 요청 함~!'); //먼저 실행

//2)
let fs3 = require('fs');
fs3.writeFile('./nodejs_write.txt', 'Hello world!\n', function(err) {
	if (err) {
		console.log('Error : ' + err);
	}
})