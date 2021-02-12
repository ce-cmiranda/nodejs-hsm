const express = require('express')
const app = express()
const port = 3000
var fs = require('fs');
var router = express.Router();


app.use('/', function(req, res, next) {

  console.log('Request URL:', req.originalUrl);
  next();
}, function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
},function (req, res, next) {
  console.log('Time:', Date(Date.now()));
  next();
});


var pathPage = function(page){
    return __dirname +"/"+ page + ".html";
};
console.log(pathPage("index"))


app.get('/', (req, res) => {

    res.sendFile(pathPage("index"))
  })

app.get('/contato', (req, res) => {

    res.sendFile(pathPage("contato"))
  })

app.get('/blog', (req, res) => {

    res.sendFile(pathPage("blog"))
  })

app.get('*', function(req, res){
    res.sendFile(pathPage("404"));
  });




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})