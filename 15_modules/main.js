// const http = require('node:http');

// import http from 'http'

// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>hello this is world</h1>');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// import {details} from "./mymodule.js";
// console.log(details.college);

// import o from "./mymodule.js";
// console.log(o.language);

const a = require("./mymodule2.js");
console.log(a, __dirname, __filename)


