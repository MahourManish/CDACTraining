const http = require("http");
const port = 3000;
const processReq = (req, res) => {
    
    console.log(`${req.method}: ${req.url}`);
    switch(req.url)
    {
        case '/favicon.ico': break;
        case '/Employee': res.end("<h1>Employee Page</h1>"); break;
        case '/Customer': res.end("<h1>Customer Page</h1>"); break;
        case '/Payroll': res.end("<h1>Payroll Page</h1>"); break;
        default: res.end("<h1>No Page Found</h1>");
    }
}

console.log(`Starting the server at http://localhost:${port}\n`);

http.createServer((req,res) => {
    processReq(req,res);
}).listen(port);
