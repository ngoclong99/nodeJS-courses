const express = require('express')
const router = express.Router()
const newController = require('../app/controllers/NewController')

// Cấu hình
// Những thằng có path === /news ---> đưa vào đây ---> route đến path cụ thể
router.get('/:slug', newController.details)
router.get('/', newController.news)

module.exports = router
