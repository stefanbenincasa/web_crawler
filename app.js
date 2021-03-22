// Import //
const routes = require('./src/routers/routes')
const express = require('express')
const request = require('postman-request')
const path = require('path')
const fs = require('fs')

// Initialisation //
const port = 5000
const title = 'Web Crawler' 
const app = express()
app.use(express.static(path.join(__dirname, '/src/assets')))

// Routes //
app.use('/', routes)

// Execution //
app.listen(port, () => {
  console.log(`'${title}' application listening on port ${port}...`)
})
