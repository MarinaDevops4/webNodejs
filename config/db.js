/**
 * Configura y establece una conexión a una base de datos MySQL.
 * 
 * @module
 * @name db
 */

const mysql = require('mysql2');

/**
 * Los datos de configuración para la conexión a la base de datos MySQL.
 * @typedef {Object} DbConfig
 * @property {string} host - La dirección del servidor de la base de datos.
 * @property {string} user - El nombre de usuario para autenticarse en la base de datos.
 * @property {string} password - La contraseña del usuario de la base de datos.
 * @property {string} database - El nombre de la base de datos a la que se conectará.
 */

/**
 * Crea una instancia de conexión a la base de datos MySQL con la configuración proporcionada.
 * @type {DbConfig}
 */
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'testnodejs',
};

/**
 * La conexión activa a la base de datos MySQL.
 * @type {import('mysql2').Connection}
 */
const connection = mysql.createConnection(dbConfig);

/**
 * Establece la conexión a la base de datos MySQL.
 * @function
 * @param {function} callback - Una función de devolución de llamada que se ejecuta una vez que se establece la conexión.
 * @returns {void}
 */
connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a MySQL:', error);
    return;
  }
  console.log('Conexión a MySQL establecida correctamente');
});

module.exports = connection;
