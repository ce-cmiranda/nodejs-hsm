var https = require('https');

const data = JSON.stringify({
    name:"test",
    salary:"123",
    age:"23"
  })

const options = {
    hostname: 'dummy.restapiexample.com',
    port: 443,
    path: '/api/v1/create',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
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
  
  req.write(data)
  req.end()