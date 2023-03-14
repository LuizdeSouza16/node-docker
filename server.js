'use strict'

import express from 'express'

//Constants
const PORT = 8080
const HOST = '0.0.0.0'

//App
const app = express()
app.get('/', (req, res) => {
  res.send('hello World')
})

app.listen(PORT, HOST, () => {
  consolo.log(`Running on http://${HOST}:${PORT}`)
})
