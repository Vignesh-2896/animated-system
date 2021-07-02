var http = require("http");
var fs = require("fs");

const server = http.createServer((req,res) => {
    let urlType = req.url.slice(1);

    res.writeHead(200, {'Content-Type':"text/html"});
    if(urlType == "") writeData(res,"index.html")
    else if(urlType == "about") writeData(res,"about.html");
    else if(urlType == "contact") writeData(res,"contact.html")
    else writeData(res,"404.html")
});

server.listen(8080);

const fetchDataSync = (fileName) => {
    return fs.readFileSync(fileName,"utf8");
}

const writeData = (response,fileName) => {
    htmlData = fetchDataSync(fileName);
    response.write(htmlData);
    response.end();
}