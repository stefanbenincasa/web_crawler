// Import // 
const path = require('path')
const express = require('express')
const router = new express.Router()

// Initialise //
const pathToStatic = path.join(__dirname, '../assets')

// Routes //
router.post('/api/submit', (req, res) => {
  res.send('Submit response.')
})

router.get('/', (req, res) => { 
  res.sendFile('index.html', {
    root: pathToStatic + '/pages'
  })
}) 

// Export //
module.exports = router 
