module.exports = (app) => {

    const produto = require('../controllers/ProdutoController');

    app.route('/produtos')
        .get( (req, res) => produto.getAll(req, res))
        .post( (req, res) => produto.post(req, res));

    app.route('/produtos/:id')
        .get( (req, res) => produto.getById(req, res))
        .put( (req, res) => produto.put(req, res))
        .delete( (req, res) => produto.delete(req, res));
}