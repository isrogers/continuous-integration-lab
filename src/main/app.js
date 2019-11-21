
var express = require('express')
var app = express()
var app2 = express()

// The code below will display 'Hello World!' to the browser when you go to http://localhost:3000
app.get('/', (req, res) => {
    // the .status(200) isn't necessary since it is the default return status
    res.status(200).send('Hello World!')
})

app.listen(3000, () => {
    console.log('Example app listening on http://localhost:3000')
})

app2.listen(3001, () => {
    console.log('Example app listening on http://localhost:3001')
})

module.exports = app;