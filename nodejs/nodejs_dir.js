let fs = require('fs');

fs.mkdir('./nodejs_dir', 0666, function(err) {
	if (err) throw err;
	console.log('새로운 nodejs_dir 폴더를 만들었습니다.');

	fs.rmdir('./nodejs_dir', function(err) {
		if (err) throw err;
		console.log('nodejs_dir 폴더를 삭제했습니다.');
	});
});