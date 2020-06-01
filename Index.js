const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => res.send('Hello Arshia Hackers'))

app.listen(port, () => console.log('Example app is listening at http://localhost:%s',port))
