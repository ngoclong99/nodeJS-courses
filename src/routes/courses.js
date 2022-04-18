const express = require('express')
const router = express.Router()

const courseController = require('../app/controllers/CourseController')

// Cấu hình
// Những thằng có path === /news ---> đưa vào đây ---> route đến path cụ thể
router.get('/create', courseController.create)
router.post('/store', courseController.store)
router.get('/:id/edit', courseController.edit)
router.patch('/:id/restore', courseController.restore)
router.post('/handle-submit-form', courseController.handleSubmitFormAction)
router.put('/:id', courseController.update)
router.delete('/:id/force', courseController.forceDestroy)
router.delete('/:id', courseController.destroy)
router.get('/:slug', courseController.details)

module.exports = router
