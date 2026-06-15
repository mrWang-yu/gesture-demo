const http = require('http');
const fs   = require('fs');
const path = require('path');
const PORT = 7788;
const DIR  = __dirname;

http.createServer((req, res) => {
  const file = path.join(DIR, 'index.html');
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  fs.createReadStream(file).pipe(res);
}).listen(PORT, () => {
  console.log('SERVER_READY');
});
