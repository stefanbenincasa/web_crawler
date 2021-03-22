// Import //
const express = require('express')
const request = require('postman-request')
const path = require('path')
const fs = require('fs')

// Initialisation //
const port = 5000
const title = 'Web Crawler' 
const app = express()
const pathToStatic = path.join(__dirname, '/src/assets')

app.use(express.static(pathToStatic))

// Routes //
// app
app.get('/', (req, res) => {
  res.sendFile('index.html', {
		root: pathToStatic + '/pages'
	})
}) 

// Execution //
app.listen(port, () => {
  console.log(`'${title}' application listening on port ${port}...`)
})
