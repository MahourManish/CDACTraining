const http = require("http");
const fs = require("fs");
const parse = require("url").parse;
const qs = require("querystring");
const root = __dirname;
port = 3000;

const renderPage = (fileName, res) =>
{

    fs.createReadStream(root + fileName).pipe(res);
}

const processPost = (req,res) => {
    let inputs = "";
    req.on("data", result => {inputs = result.toString()});
    req.on("end",() => {
        const data = qs.parse(inputs);
        const msg = `<h1>Registration Successfull using POST: ${data.name}`;
        res.end(msg);
    })
} 

const processGet = (req,res) => {
    const inputs = parse(req.url,true);
    console.log(inputs);
    if(fs.existsSync(root + req.url)){
        renderPage(req.url,res);
    }
    else{
        renderPage("/ErrorPage.html",res)
    }
};
http.createServer((req,res) => {
    console.log(`${req.method}: ${req.url}`)
    if(req.method == "POST"){
        processPost(req,res);
    }else{
        processGet(req,res);
    }
    
}).listen(port);
