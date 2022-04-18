class NewController {
    // [GET] /news
    news(req, res) {
        res.render('news')
    }
    details(req, res) {
        res.send('detail')
    }
}

// Tạo 1 đối tượng của NewController và exports ra ngoài
module.exports = new NewController()
