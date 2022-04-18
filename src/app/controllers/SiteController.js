const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../../util/mongoose')
class SiteController {
    // [GET] /
    home(req, res, next) {
        // Nó lấy trường có tên ' courses ' trên db ---> tạo đối tượng dựa trên ' Course '
        // TODO find documents from the same collection
        Course.find({})
            .then((courses) => {
                // Todo chuyển obj trong courses về obj bình thường để show ra đc
                res.render('home', { courses: mutipleMongooseToObject(courses) })
            })
            .catch(next)
    }

    // [get] /search
    search(req, res) {
        res.render('search')
    }
}

// Tạo 1 đối tượng của SiteController và exports ra ngoài
module.exports = new SiteController()
