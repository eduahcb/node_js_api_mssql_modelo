const router = require('express').Router();
const produto = require('../controllers/ProdutoController');

router.route('/')
    .get((req, res) => produto.getAll(req, res))
    .post((req, res) => produto.post(req, res));

router.route('/:id')
    .get((req, res) => produto.getById(req, res))
    .put((req, res) => produto.put(req, res))
    .delete((req, res) => produto.delete(req, res));

module.exports = router;