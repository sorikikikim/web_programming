console.log('숫자 보여주기 : %d', 10);
console.log('문자열 보여주기 : %s', 'Hansung University');
console.log('JSON 객체 보여주기 : %j', {name : 'Hansung'});

var result = 0;
console.time('duration');
for (var i = 1; i <= 1000; i++) {
	result += i;
}

console.timeEnd('duration');
console.log("1~1000 : %d", result);

var school = {name : 'Hansung', district : 'Seongbuk-gu'};
console.dir(school);
console.log('school = %j', school);

console.log('argv # of parameters : ', process.argv.length);
console.dir(process.argv);

process.argv.forEach(function(item, index) {
	console.log(index + ' : ', item);
});

//console.dir(process.env);

console.log('file name : ', __filename);
console.log('dir name : ', __dirname);

//파일 자체를 객체처럼 사용
let calc = require('./nodejs_calc1');
console.log(calc.add(10, 20));
console.log(calc.multipy(10, 20));

let calc2 = require('./nodejs_calc2');
console.log(calc2.add(10, 20));
console.log(calc2.multipy(10, 20));

//외장모듈 사용하기
//os module
var os = require('os');

console.log('hostname : ', os.hostname());
console.log('memory : %d / %d', os.freemem(), os.totalmem());
console.log('CPU info : \n');
console.log(os.cpus());
console.log('network interface : \n');
console.log(os.networkInterfaces());

//path module
var path = require('path');

var directories = ['users', 'mike', 'docs'];
var docsDirectory = directories.join(path.sep);
console.log('Document Directroy : %s', docsDirectory);

var curPath = path.join('/Users/mike', 'notepad.exe');
console.log('File path : ', curPath);

const filename = 'C://Users//mike//notepad.exe';
const dirname = path.dirname(filename);
const basename = path.basename(filename);
const extname = path.extname(filename);

console.log('dir name = ', dirname);
console.log('base name = ', basename);
console.log('ext name = ', extname);
