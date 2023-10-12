/**
 * Módulo del enrutador para la página de confirmación.
 * @module confirmationRoutes
 */

const express = require('express');
const router = express.Router();

/**
 * Ruta que muestra la página de confirmación.
 * @name GET /
 * @function
 * @param {object} req - Objeto de solicitud.
 * @param {object} res - Objeto de respuesta.
 */
router.get('/', (req, res) => {
  res.render('confirmation.ejs', { activePath: res.locals.activePath });
});

module.exports = router;
