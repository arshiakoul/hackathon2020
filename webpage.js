const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello Arshia and Shaivi Hackers'))

app.listen(port, () => console.log('Example app is listening at http://localhost:%s',port))
