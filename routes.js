/* eslint-disable new-cap */
/* eslint-disable capitalized-comments */
var router = require('express').Router()

router.get('/', (req, res) => {
    // res.send('Hello world!')
    res.render('index')
})

module.exports = router