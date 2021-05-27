const router = require('express').Router()

router.get('/', (req, res) => res.send('admin working'))
router.get('/admin-login', (req, res) => res.send('admin login'))
router.get('/login', (req, res) => res.send('admin login'))
router.get('/dashboard', (req, res) => res.send('admin dashboard'))

module.exports = router