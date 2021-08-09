const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 3306,
    user: 'root',
    password: 'timao1996',
    database: 'agenda-petshop'
})

module.exports = conexao