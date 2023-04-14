const express = require('express')
const app = express()
const os = require('os')

const port = 5000

app.get('/', (req, res) => {
  res.send('Hostname: ' + os.hostname())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})