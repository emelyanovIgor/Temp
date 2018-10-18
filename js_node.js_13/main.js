/*const http = require ('http');
const port = 3000;
const pathName = '127.0.0.1';

http.createServer((req, res) => {
  console.log(req.method);
  res.write('HELLO!');
  res.end();
}).listen(port, pathName, () => {
  console.log('...start listening.')
});*/

//***************************************
/*CRUD

Create - post
Read - get
Update - put
Delete - delete*/
//***************************************

const http = require('http');
const secret = require('./secret');

const port = 3000;
const pathName = '127.0.0.1';


http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.write(secret.password);
    res.write(secret.login);
  }
  res.end();
}).listen(port, pathName, () => {
  console.log('...start listening.')
});
