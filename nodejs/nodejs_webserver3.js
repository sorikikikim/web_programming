const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.end('<h3>Hello World!<h3>');
});

//const server = http.createServer((req, res) => {
//	res.writeHead('200', {'Content-Type' : 'text/plain'});
//	res.write('Hello World!');
//	res.end();
//});

server.listen(port, () => {
	console.log('web server starts ... at port %d', port);
});