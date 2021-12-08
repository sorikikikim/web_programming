const http = require('http');
const server = http.createServer();
const port = 3000;

server.listen(port, function() {
	console.log('web server starts ... at pot %d', port);
});

server.on('connection', function (socket) {
	let addr = socket.address();
	console.log('client connects : %s, %d', addr.address, addr.port);
});

server.on('request', function (req, res) {
	console.log('client requests...');
	//console.dir(req);
})

server.on('close', function () {
	console.log('server terminates...');
	server.close();
});