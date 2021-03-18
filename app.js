// Import //
const express = require('express')
const request = require('postman-request')
const path = require('path')
const fs = require('fs')

// Initialisation //
const port = 5000
const title = 'Web Crawler' 
const app = express()

// Routes //
app.use('/', (req, res) => {
  res.send('Welcome to Web Crawler.')
}) 

// Execution //
app.listen(port, () => {
  console.log(`'${title}' application listening on port ${port}...`)
})
