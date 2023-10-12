/**
 * Módulo del enrutador para gestionar rutas relacionadas con contactos.
 * @module contactsRoutes
 */

const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contactsControllers');

/**
 * Ruta que carga la página de contacto.
 * @name GET /contacts
 * @function
 * @param {object} req - Objeto de solicitud.
 * @param {object} res - Objeto de respuesta.
 */
router.get('/contacts', contactsController.renderContactsPage);

/**
 * Ruta que maneja el envío del formulario de contacto.
 * @name POST /contacts
 * @function
 * @param {object} req - Objeto de solicitud.
 * @param {object} res - Objeto de respuesta.
 */
router.post('/contacts', contactsController.handleContactForm);

module.exports = router;
