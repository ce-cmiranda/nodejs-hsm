// Método 1

// var http = require('http');

// var options = 'http://dummy.restapiexample.com/api/v1/employee'
// var id = '1'

// // Get employee by id
// http.get(options+"/"+id, (res) =>{
//     console.log(`STATUS: ${res.statusCode}`);
//     console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
//     res.setEncoding('utf8');
//     res.on('data', (chunk) => {
//       console.log(`BODY: ${chunk}`);
//     });
//     res.on('end', () => {
//       console.log('No more data in response.');
//     });
// })


// Método 2
var https = require('https');

const options = {
    hostname: 'dummy.restapiexample.com',
    port: 443,
    path: '/api/v1/employee/1',
    method: 'GET'
  }
  
  const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)
  
    res.setEncoding('utf8');
    res.on('data', (d) => {
      console.log(d)
    })
  })
  
  req.on('error', error => {
    console.error(error)
  })
  
  req.end()