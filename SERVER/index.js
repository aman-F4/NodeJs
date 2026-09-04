
// we want to make HTTP server
// const http = require("http");

// const myServer = http.createServer((req, res) => {
//     console.log(req.headers);
//     res.end("Hello From Server Agaain");
// })
//it will create my web server but who will  handle like for which particular request what shoul be
// so we should have handler function which process incoming request
// the arrow function will be responsible form processing my incoming function

// now to run the server we need a port No.
// one server can run only at single port
//if you are having multiple server you cannot run at the same server

// myServer.listen(8000, () => console.log("Server Started!"));


const http = require("http");
const fs = require("fs")

const myServer = http.createServer((req, res) => {
    const log  = `${Date.now()}: ${req.url} New Req Received\n`;
    fs.appendFile("log.txt",log, (err, data) => {
        switch(req.url){
            case '/': res.end("HomePage");
            break;
            case '/about': res.end("I am Aman Verma");
            break;
            default: res.end("404 Not Found")
        }
     res.end("Hello From Server Agaain");
    });  
});

myServer.listen(8000, () => console.log("Server Started!"));