const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
var cors = require('cors');




app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

app.use(cors());




const users = require('./controllers/users');
app.post('/alunos', users.create);
app.get('/alunos', users.findAll);
app.get('/alunos/:alunoId', users.findOne);
app.put('/alunos/:alunoId', users.update);
app.delete('/alunos/:alunoId', users.delete)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })