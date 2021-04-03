var cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const dbConfig = require('./config/db.config')
const mongoose = require('mongoose')


// https://medium.com/@mmajdanski/express-body-parser-and-why-may-not-need-it-335803cd048c

// app.use(bodyParser.urlencoded({extended: true}))
// app.use(bodyParser.json())


app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

app.use(cors());


mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Banco de dados conectado");
}).catch(err => {
    console.log('Erro durante a conexão', err);
    process.exit();
});


const aluno = require('./controllers/aluno.controller');
app.post('/alunos', aluno.create);
app.get('/alunos', aluno.findAll);
app.get('/alunos/:alunoId', aluno.findOne);
app.put('/alunos/:alunoId', aluno.update);
app.delete('/aluno/:alunoId', aluno.delete)
// app.get('/', (req, res)=>{
//     res.json({"message": "Bem-vindo ao nosso primeiro App com BD"})
// })

app.listen(3000, ()=>{
    console.log("Servidor executando na porta 3000")
})
