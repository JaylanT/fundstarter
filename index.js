var http = require('http');
var fs = require('fs');

var PORT = (process.env.PORT || 8080); 

http.createServer((req, res) => {	
	var index = fs.readFileSync('public/index.html', 'utf8');

	res.writeHead(200, {"Content-Type": "text/html"});
	res.write(index);
	res.end();
}).listen(PORT, () => {
    console.log("Server listening on: http://localhost:%s", PORT);
});

