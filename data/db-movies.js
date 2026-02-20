const mysql = require("mysql2")

// vado a inizializzare la connessione con mysql
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

// vado a connettere con mysql
connection.connect((err) => {
    // eventuali ERRORI
    if (err) throw err;
    console.log('Connected to MySQL!');
})

module.exports = connection;