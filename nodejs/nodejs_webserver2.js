const http = require('http');
const fs = require('fs');

const port = 3000;
const server = http.createServer();

server.listen(port, function() {
	console.log('web server starts ... at port %d', port);
});

server.on('request', function (req, res) {
	const filename = 'chap11/choco.jpeg';
	fs.readFile(filename, function (err, data) {
		res.writeHead(200, {
			'Content-Type' : 'text/plain' //'img/png'
		});
		res.write(data);
		res.end();
	})
})