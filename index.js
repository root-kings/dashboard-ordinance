const express = require('express')

const port = 3000

var app = express()

app.use(express.static('public'))

app.set('view engine', 'pug');
app.set('views', './views');


app.use('/', require('./routes'))

app.listen(port, err => {
    if (err) {
        throw err
    }
    console.info('Listening on port ' + port + "...")
})