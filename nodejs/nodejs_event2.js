process.on('ksr', function(a) {
	console.log('ksr event 발생', a);
});

setTimeout(function() {
	console.log('2초 후에 ksr event 실행 ...');
	process.emit('ksr', 2000 + 'korea'); //binding
}, 2000);