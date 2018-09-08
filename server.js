// server.js
const path = require('path')
const express = require('express')
const jsonServer = require('json-server')
// const routes = require('./routes.json')
const port = process.env.PORT || 8080;

const server = jsonServer.create()
const router = jsonServer.router('db.json')

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, PUT, DELETE");
  next();
});

server.use('/', express.static(path.join(__dirname, 'dist')))

// server.use(jsonServer.rewriter(routes))
server.use('/api', router)

server.listen(port, () => {
  console.log('JSON Server is running');
})