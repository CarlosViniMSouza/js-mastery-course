var http = require('http');
const port = 3030;

//create a server object:
http.createServer((req, res) => {
    try {
        res.write('Server HTTP up! 🚀');
        res.end();
    } catch (errorServer) {
        res.write(`Error to try up server. ${errorServer}`);
        res.end();
    }
}).listen(port);
