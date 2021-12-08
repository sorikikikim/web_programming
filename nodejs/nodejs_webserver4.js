const http = require('http');
const fs = require('fs');

const port = 3000;
const server = http.createServer(function(req, res) {
	let url = req.url;
	console.log('url =', url);
	if (url == '/') {
		url = '/index.html'
	}
	if (url == '/favicon.ico') {
		res.writeHead(404);
		res.write('Error!');
		res.end();
	}
	res.writeHead(200);
	console.log('filename =', __dirname+url);
	//res.write(fs.readFileSync(__dirname + url));
	fs.readFile(__dirname+url, 'utf-8', (err, data) => {
		res.write(data);
		res.end();
	})
});

server.listen(3000);