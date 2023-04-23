const express = require('express')
const app = express()

const PORT = 3000;
const ACCESS_TOKEN = "thisismytoken"

app.get('/', (req, res) => {
    res.send(ACCESS_TOKEN)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })