const express = require('express')
const router = express.Router()
const newController = require('../app/controllers/NewController')

// Cấu hình
// Những thằng có path === /news ---> đưa vào đây ---> route đến path cụ thể
router.use('/:slug', newController.details)
router.use('/', newController.news)

module.exports = router
