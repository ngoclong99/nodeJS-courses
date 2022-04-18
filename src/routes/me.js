const express = require('express')
const router = express.Router()

const meController = require('../app/controllers/MeController')

// Cấu hình
// Những thằng có path === /news ---> đưa vào đây ---> route đến path cụ thể
router.get('/stored/courses', meController.storedCourses)
router.get('/trash/courses', meController.trashCourses)

module.exports = router
