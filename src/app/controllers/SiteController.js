class SiteController {
  // [GET] /
  home(req, res) {
    res.render('home')
  }
  // [get] /search
  search(req, res) {
    res.render('search')
  }
}

// Tạo 1 đối tượng của SiteController và exports ra ngoài
module.exports = new SiteController()
