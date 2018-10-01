const sql = require('mssql');

exports.getAll = async() => {
    const conn =  await sql.connect(global.config);
    const result =  await conn.request()
                        .query('select * from produto');
    sql.close();
    return result.recordset;
}

exports.getById = async(id) => {
    const conn = await sql.connect(global.config);
    const result = await conn.request()
                            .input("id", id)
                            .query('select * from produto where id = @id');
    sql.close();
    return result.recordset;
}

exports.post = async(produto) => {
    const conn = await sql.connect(global.config);
    const result = await conn.request()
                            .input('nome', produto.nome)
                            .input('descricao', produto.descricao)
                            .query('insert into produto values(@nome, @descricao)');
    sql.close();
    return result;
}

exports.put = async(produto) => {
    const conn = await sql.connect(global.config);
    const result = await conn.request()
                            .input('nome', produto.nome)
                            .input('descricao', produto.descricao)
                            .input('id', produto.id)
                            .query(`update produto 
                                    set nome  = @nome,
                                    descricao = @descricao
                                    where id = @id
                            `);
    sql.close();
    return result;
}

exports.delete = async(id) => {
    const conn = await sql.connect(global.config);
    const result = await conn.request()
                            .input('id', id)
                            .query('delete from produto where id = @id');
    sql.close();
    return result;
}