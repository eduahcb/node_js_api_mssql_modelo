const produto = require('../models/ProdutoRepository');

exports.getAll = async (req, res) => {

    try {

        const result = await produto.getAll();

        res.status(200).json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

exports.getById = async (req, res) => {

    try {

        const id = req.params.id;

        const result = await produto.getById(id);

        if (result.length == 0) {
            console.log('produto não encontrado');
            
            res.status(404).json({
                msg: "produto não encontrado"
            });
            return;
        }
        res.status(200).json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

exports.post = async (req, res) => {

    try {

        req.check('nome', 'campo obrigatório').isLength({ min: 1 });
        req.check('descricao', 'campo obrigatório').isLength({ min: 1 });

        const err = req.validationErrors();

        if (err) {
            res.status(400).json(err);
            return;
        }

        const dados = req.body;

        const result = await produto.post(dados);

        console.log(result);

        res.status(201).json({
            msg: "produto cadastrado"
        });

    }
    catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

exports.put = async (req, res) => {

    try {

        const id = req.params.id;

        const dados = req.body;

        dados.id = id;

        const result = await produto.put(dados);

        if (result.rowsAffected == 0) {
            res.status(404).json({
                msg: 'produto não encontrado'
            });
            return;
        }

        res.status(201).json({
            msg: 'alterado com sucesso'
        })

    }
    catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

exports.delete = async (req, res) => {

    try {

        const id = req.params.id;

        const result = await produto.delete(id);

        if (result.rowsAffected == 0) {
            res.status(404).json();
            return;
        }

        res.status(200).json({
            msg: 'produto excluido'
        })
    }
    catch (error) {
        console.log(error);

    }
}