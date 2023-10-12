/**
 * Módulo del enrutador para gestionar rutas relacionadas con la página de inicio.
 * @module homeRoutes
 */

const express = require('express');
const router = express.Router();

/**
 * Ruta que carga la página de inicio.
 * @name GET /
 * @function
 * @param {object} req - Objeto de solicitud.
 * @param {object} res - Objeto de respuesta.
 */
router.get('/', (req, res) => {
  res.render('home.ejs', { activePath: res.locals.activePath });
});

module.exports = router;
