const express = require('express')
const bodyParse = require('body-parser')

const app = express()

app.get('/api/hello-world', (req, res) => {
    res.json({"hello": "world"})
})

app.listen('8000', () => {
    console.log("listen and serve on port 8000")
})