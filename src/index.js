//TODO require('express')  import 1 thư viện express
const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
//TODO KHởi tại 1 function
const app = express()
const port = 3000
const route = require('./routes/')

// Static Files
app.use(express.static(path.join(__dirname, 'public')))

// giúp sử dụng res.body
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//  HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'resources/views'))

// định nghĩa route và show theo page
route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
