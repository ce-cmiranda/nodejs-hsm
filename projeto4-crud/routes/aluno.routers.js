module.exports = (app) => {
    const aluno = require('../controllers/aluno.controller');
    app.post('/alunos', aluno.create);
    app.get('/alunos', aluno.findAll);
    app.get('/alunos/:alunoId', aluno.findOne);
    app.put('/alunos/:alunoId', aluno.update);
    app.delete('/aluno/:alunoId', aluno.delete)
}