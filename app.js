/**
 * Aplicación web con Express.js que configura las rutas y middleware.
 * @module app
 */

// Importa los módulos y librerías necesarios.
const express = require('express'); // Framework web Express.js
const bodyParser = require('body-parser'); // Middleware para analizar datos de formularios
const path = require('path'); // Módulo para trabajar con rutas de archivos
const app = express(); // Crea una instancia de la aplicación Express
const port = process.env.PORT || 3000; // Puerto en el que se ejecutará el servidor

// Middleware y configuraciones

// Analiza los datos de formularios con codificación url-encoded.
app.use(bodyParser.urlencoded({ extended: true }));

// Configura el motor de vistas EJS.
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views')); // Establece la ubicación de las vistas

// Permite servir archivos estáticos desde la carpeta 'public'.
app.use(express.static('public'));

// Middleware para activar el menú basado en la ruta actual.
app.use((req, res, next) => {
  res.locals.activePath = req.path; // Almacena la ruta actual en res.locals
  next();
});

// Importa las rutas definidas en otros archivos.
const homeRoutes = require('./src/routes/homeRoutes');
const tosRoutes = require('./src/routes/tosRoutes');
const contactsRoutes = require('./src/routes/contactsRoutes');
const confirmationRoutes = require('./src/routes/confirmationRoutes');

// Utiliza las rutas en la aplicación.
app.use('/', homeRoutes); // Rutas de la página de inicio
app.use('/tos', tosRoutes); // Rutas de Términos y Condiciones
app.use(contactsRoutes); // Rutas de contacto
app.use('/confirmation', confirmationRoutes); // Rutas de confirmación

// Inicia el servidor web y escucha en el puerto especificado.
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
