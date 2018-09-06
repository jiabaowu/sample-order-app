// server.js
const path = require('path')
const express = require('express')
const jsonServer = require('json-server')
// const routes = require('./routes.json')
const port = process.env.PORT || 3000;

const server = jsonServer.create()
const router = jsonServer.router('db.json')

server.use('/', express.static(path.join(__dirname, 'dist')))

// server.use(jsonServer.rewriter(routes))
server.use('/api', router)

server.listen(port, () => {
  console.log('JSON Server is running');
})