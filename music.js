const express = require('express')
const app = express()
const port = 3333
const music = process.env.MUSIC
app.get('/', (req, res) => {
  res.send('My favorite Music: ' + music)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

