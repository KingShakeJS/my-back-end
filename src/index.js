
const express = require('express')

const tls = require("tls");
const app = express()
const port =process.env.PORT || 3003
const jsonBodyMiddleware = express.json()
app.use(jsonBodyMiddleware)

app.get('/', (req, res) => {
    res.send('ddd')
})


app.listen(port, () => {
    console.log(`сайтик стартанул на порте: ${port}`)
})