/**
 * Módulo del enrutador para gestionar rutas relacionadas con la página de términos de servicio (ToS).
 * @module tosRoutes
 */

const express = require('express');
const router = express.Router();

/**
 * Ruta que carga la página de términos de servicio.
 * @name GET /
 * @function
 * @param {object} req - Objeto de solicitud.
 * @param {object} res - Objeto de respuesta.
 */
router.get('/', (req, res) => {
  res.render('tos.ejs', { activePath: res.locals.activePath });
});

module.exports = router;
