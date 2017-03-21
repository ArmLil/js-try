'use strict'

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {

  if(req.url === '/home-page'){
    fs.readFile('home-page.html', (e, r) => {
    res.end(r);
    })
  }

  else if(req.url === '/about-page'){
    fs.readFile('about-page.html', (e, r) => {
      res.end(r);
    })
  }

  else{
    res.end();
  }
}).listen(8080);
