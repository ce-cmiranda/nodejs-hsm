var https = require('https');

const id = '22';
const options = {
    hostname: 'dummy.restapiexample.com',
    port: 443,
    path: '/api/v1/delete/'+id,
    method: 'DELETE',

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