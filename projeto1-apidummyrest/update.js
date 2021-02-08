var https = require('https');

const data = JSON.stringify({
    name:"Carlos",
    salary:"100000000000",
    age:"18"
  })

  const id = '2'
const options = {
    hostname: 'dummy.restapiexample.com',
    port: 443,
    path: '/api/v1/update/'+id,
    method: 'PUT',
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