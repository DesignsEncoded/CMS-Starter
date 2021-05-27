const router = require('express').Router()
router.get('/', (req, res) => res.render('front/home'))
router.get('/about-us', (req, res) => res.render('front/about'))
router.get('/contact-us', (req, res) => res.render('front/contact'))

module.exports = router