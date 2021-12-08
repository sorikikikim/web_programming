const http = require('http');
const url = require('url');

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
	  <p><a href="https://www.w3.org/TR/html5/" target="_blank" title="html5 speicification">Hypertext Markup Language (HTML)</a> is the standard markup language for <strong>creating <u>web</u> pages</strong> and web applications.Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
	  <br><br><br>
	  </p><p style="margin-top:45px;">
		HTML elements are the building blocks of HTML pages. 
		With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. 
		It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. 
		HTML elements are delineated by tags, written using angle brackets.
	  </p>
	</body>
	</html>
	`;
	res.end(template);
});
server.listen(3000);