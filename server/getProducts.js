const products = require('../products.json')

function getProducts (req, res) {
  if (req.query.price) {
    let higherCost = products.filter((val) => val.price >= parseInt(req.query.price))
    return res.status(200).send(higherCost)
  }
  res.status(200).send(products)
}

module.exports = getProducts