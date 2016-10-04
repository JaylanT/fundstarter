var http = require('http');
var fs = require('fs');

var PORT = (process.env.PORT || 8080); 

http.createServer((req, res) => {	
	fs.readFile('public/index.html', (err, data) => {
		if (err) throw err;
		res.writeHead(200, {"Content-Type": "text/html"});
		res.write(data.toString());
		res.end();
	});
}).listen(PORT, () => {
    console.log("Server listening on: http://localhost:%s", PORT);
});

