module.exports = (app) => {
    const users = require('../controllers/users');
    app.post('/alunos', users.create);
    app.get('/alunos', users.findAll);
    app.get('/alunos/:alunoId', users.findOne);
    app.put('/alunos/:alunoId', users.update);
    app.delete('/aluno/:alunoId', users.delete)
}