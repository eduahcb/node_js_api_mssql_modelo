const app = require('./config/server')();

app.listen(process.env.PORT, () => {
    console.log(`servidor rodando na porta ${process.env.PORT}`);
})