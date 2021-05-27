// Import external dependencies
const express = require('express')
const dotenv = require('dotenv').config()
const handlebars = require('express-handlebars')
const compression = require('compression')

// Import custom dependencies
const { helpers } = require('./app/services/helper.service')
const adminRoutes = require('./app/routes/admin.routes')
const branchRoutes = require('./app/routes/branch.routes')
const frontRoutes = require('./app/routes/front.routes')

// App Initializations
const app = express()
const hbs = handlebars.create({
    extname: 'hbs',
    helpers: helpers
})


// Subscribing to a specific port for running the App
const PORT = process.env.PORT


// Middlewares start here

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(compression())

app.use('/assets', express.static('res'))

// Routes start here
app.use('/admin', adminRoutes)
app.use('/branch', branchRoutes)
app.use(frontRoutes)
// Routes end here

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')

// Middlewares end here


// Initializing Server
app.listen(PORT, () => console.log(`Server started at: ${PORT}`))