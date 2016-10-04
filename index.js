var http = require('http');
var fs = require('fs');

var PORT = (process.env.PORT || 8080); 

http.createServer((req, res) => {	
	var index = 'public/index.html';

	fs.stat(index, (err, stats) => {
		if (err && err.code == 'ENOENT') {
			res.writeHead(400, {"Content-Type": "text/plain"});
			res.write("404: NOT FOUND");
			res.end();
			return;
		} else if (err) {
			throw err;
		}

		fs.open(index, 'r', (err, fd) => {
			if (err) throw err;

			var	buffer = new Buffer(stats.size);

			fs.read(fd, buffer, 0, buffer.length, null, (err, bytesRead, buffer) => {
				if (err) {
					fs.close(fd);
					throw err;
				}

				res.writeHead(200, {"Content-Type": "text/html"});
				res.write(buffer.toString('utf8', 0, buffer.length));
				fs.close(fd);
				res.end();
			});
		});
	});

}).listen(PORT, () => {
    console.log("Server listening on: http://localhost:%s", PORT);
});

