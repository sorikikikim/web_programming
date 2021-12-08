const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer(function(req, res) {
	let _url = req.url;
	const queryData = url.parse(_url, true).query;
	let title = queryData.id;
	//url에 ?id=HTML 입력
	if (_url == '/') {
		title = 'Welcome';
	}
	if (_url == '/favicon.ico') {
		res.writeHead(404);
	}
	res.writeHead(200);
	console.log(title); //title은 file이름
	const data = fs.readFile(`data/${title}`, 'utf-8', (err, data) => {
		if (err) throw err;
		//띄어쓰기 금지!!!!
		let template = `<!doctype html>
						<html>
						<head>
						  <title>WEB1 - ${title}</title>
						  <meta charset="utf-8">
						</head>
						<body>
						  <h1><a href="/">WEB</a></h1>
						  <ol>
							<li><a href="?id=HTML">HTML</a></li> 
							<li><a href="?id=CSS">CSS</a></li>
							<li><a href="?id=JavaScript">JavaScript</a></li>
						  </ol>
						  <h2>${title}</h2>
						  ${data}
						</body>
						</html>
						`;
		res.end(template);
	});
});
server.listen(3000);