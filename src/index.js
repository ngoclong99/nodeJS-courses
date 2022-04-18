const path = require('path')
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const { engine } = require('express-handlebars')

const app = express()
const port = 3000
const route = require('./routes/')
const db = require('./config/db')
const SortMiddleware = require('./app/middlewares/SortMiddleware')

// Static Files
app.use(express.static(path.join(__dirname, 'public')))
// giúp sử dụng res.body
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
//
app.use(methodOverride('_method'))
//  HTTP logger
app.use(morgan('combined'))
// Template engine
app.engine(
    '.hbs',
    engine({
        extname: '.hbs',
        helpers: {
            number: (a, b) => a + b,
            sortable: (field, sort) => {
                const sortType = sort.column === field ? sort.type : 'default';
                const icons = {
                    default: 'oi oi-elevator',
                    asc: 'oi oi-sort-ascending',
                    desc: 'oi oi-sort-descending'
                }
                const types = {
                    default: 'desc',
                    asc: 'desc',
                    desc: 'asc'
                }
                const icon = icons[sortType]
                const type = types[sortType]
                return `<a href="?_sort&column=${field}&type=${type}">
                            <span class="${icon}"></span>
                        </a>`
            }
        }
    })
)
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

// TODO custom midllerware
app.use(SortMiddleware)

//TODO connect DB
db.connect()
//TODO định nghĩa route và show theo page
route(app)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
