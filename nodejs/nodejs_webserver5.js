const http = require('http');
const url = require('url');

const server = http.createServer(function(req, res) {
	let _url = req.url;
	const queryData = url.parse(_url, true).query;
	console.log(queryData);

	if (_url == '/') {
		_url = '/index.html'
	}
	if (_url == '/favicon.ico') {
		res.writeHead(404);
	}
	res.writeHead(200);
	res.end(queryData.id + queryData.name);
});
server.listen(3000);