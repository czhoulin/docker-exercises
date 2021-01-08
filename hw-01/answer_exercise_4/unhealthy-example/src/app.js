const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  // application crashes
})

app.listen(port, () => {
  console.log(`Exercise 4 example app listening at http://localhost:${port}`)
})