const http = require('node:http') // protocolo http
const { findAvaliablePort } = require('./10.free-port.js')

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola mundo')
})

findAvaliablePort(3000).then(port => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`)
  })
})

/*
const http = require('node:http')

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola mundo')
})

server.listen(0, () => {
  console.log(`server listening on port http://localhost:${server.address().port}`)
})
*/
