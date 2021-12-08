//이 함수가 있어야지 exit()가 실행되고 아래 출력문이 출력됨
process.on('exit', function() {
	console.log('exit event 발생');
});

setTimeout(function() {
	console.log('5초 후에 exit event 실행...');
	process.exit();
}, 5000);