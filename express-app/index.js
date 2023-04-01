const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('This server is running using pm2!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})