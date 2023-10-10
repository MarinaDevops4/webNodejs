//   db config
const mysql = require('mysql2');

// Configura los datos de conexión a MySQL
const connection = mysql.createConnection({
  host: 'localhost', 
  user: 'root', 
  password: '', 
  database: 'testnodejs' 
});

// Establece la conexión a MySQL
connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a MySQL:', error);
    return;
  }
  console.log('Conexión a MySQL establecida correctamente');
});

module.exports = connection;