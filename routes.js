/* eslint-disable new-cap */
/* eslint-disable capitalized-comments */
var router = require('express').Router()

router.get('/', (req, res) => {
	// res.send('Hello world!')
	res.render('index')
})
router.get('/machine', (req, res) => {
	res.render('machine', {
		machine: undefined
	})
})
router.get('/machine/:id', (req, res) => {
	res.render('machine', {
		machine: req.params.id
	})
})

router.get('/data', (req, res) => {
	res.sendFile(__dirname+'/data.json')
})



module.exports = router
