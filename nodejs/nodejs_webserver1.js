const http = require('http');
const port = 3000;
const server = http.createServer(function (err, res) {
	console.log('client request...');
	res.writeHead(200, {
		'Content-Type' : 'text/html; charset=utf-8'
	}); //text/plain, text/html
	res.write('<!DOCTYPE html>');
	res.write('<html>');
	res.write('	<head>');
	res.write('		<title>응답 페이지</title>');
	res.write('	</head>');
	res.write('	<body>');
	res.write('		<h3>Node.js server respond</h3>');
	res.write('	</body>');
	res.write('</html>');
	res.end(); //원래는 end만 하면 되지만 코드가 긴 경우 write후 end로 해야함
});

server.listen(port, function () {
	console.log('web server starts ... at port %d', port);
});