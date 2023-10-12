const chai = require('chai');
const expect = chai.expect;
const connection = require('../config/db'); // Importa el módulo de conexión de datos

describe('Database Connection', function() {
  it('should connect to the database without errors', function(done) {
    connection.connect((error) => {
      expect(error).to.be.null; // Comprueba que no hay errores en la conexión
      done();
    });
  });

  it('should have a valid database configuration', function() {
    expect(connection.config.host).to.equal('localhost');
    expect(connection.config.user).to.equal('root');
    expect(connection.config.database).to.equal('testnodejs');
  });
});
