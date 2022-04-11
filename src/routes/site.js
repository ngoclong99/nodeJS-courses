const express = require('express')
const router = express.Router()
const siteController = require('../app/controllers/SiteController')

// Cấu hình
router.use('/search', siteController.search)
router.use('/', siteController.home)

module.exports = router
