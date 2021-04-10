const dbConfig = require('../config')

const Pool = require('pg').Pool
const pool = new Pool({
    user: dbConfig.user,
    host: dbConfig.host,
    database: dbConfig.database,
    password: dbConfig.password,
    port: 5432,
})

exports.findAll = (request, response) => {
    pool.query('SELECT * FROM students ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }


exports.findOne = (request, response) => {
    const id = parseInt(request.params.alunoId)
    console.log(id)
  
    pool.query('SELECT * FROM students WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  exports.create = (request, response) => {
    const { name, average } = request.body
    console.log(name)
  
    pool.query('INSERT INTO students (name, average) VALUES ($1, $2)', [name, average], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${result.insertId}`)
    })
  }

exports.update = (request, response) => {
    const id = parseInt(request.params.alunoId)
    const { name, average } = request.body
  
    pool.query(
      'UPDATE students SET name = $1, average = $2 WHERE id = $3',
      [name, average, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }

exports.delete = (request, response) => {
    const id = parseInt(request.params.alunoId)
  
    pool.query('DELETE FROM students WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }