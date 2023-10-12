/**
 * Módulo de controlador para la página de contacto y el formulario de contacto.
 * @module contactsControllers
 */

// Importa las bibliotecas necesarias
const nodemailer = require('nodemailer'); // Utilizado para enviar correos electrónicos
const db = require('../../config/db'); // Configuración de la base de datos MySQL


/**
 * Renderiza la página de contacto.
 *
 * @param {object} req - Objeto de solicitud HTTP.
 * @param {object} res - Objeto de respuesta HTTP.
 */
const renderContactsPage = (req, res) => {
    res.render('contacts.ejs', { activePath: res.locals.activePath });
};

/**
 * Maneja el envío del formulario de contacto.
 *
 * @param {object} req - Objeto de solicitud HTTP que contiene los datos del formulario.
 * @param {object} res - Objeto de respuesta HTTP.
 */
const handleContactForm = (req, res) => {


    

    // Extrae los campos del formulario desde la solicitud
    const { name, email, subject, message } = req.body;

    // Prepara una consulta SQL para insertar los datos del formulario en la base de datos
    const query = 'INSERT INTO contactos (name, email, subject, message) VALUES (?, ?, ?, ?)';
    const values = [name, email, subject, message];

    // Ejecuta la consulta en la base de datos
    db.query(query, values, (error, results) => {
        if (error) {
            console.error('Error al insertar datos en la base de datos:', error);
            res.send('Error al enviar el formulario.');
        } else {
            // Configura el transporter para enviar correos electrónicos a través de Gmail
            const transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: 'marinadevops@gmail.com',
                    pass: 'drqr fvzc tnww nccj'
                },
            });

            // Configura las opciones del correo electrónico a enviar
            const mailOptions = {
                from: 'SENSITIVE',
                to: email,
                subject: 'formulario de contacto recibido',
                html: `
                    <h1>Hola ${name}!</h1>
                    <br>
                    <h2>Gracias por contactarnos</h2> 
                    <br>
                    <p>Pronto nos pondremos en contacto con usted</p>
                `,
            };

            // Envía el correo electrónico
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('Error al enviar el correo electrónico:', error);
                } else {
                    console.log('Correo electrónico enviado con éxito:', info.response);
                }
            });

            console.log('Datos insertados correctamente en la base de datos.');
            res.redirect('/confirmation');
        }
    });

    // Puedes descomentar esta línea para redirigir al usuario nuevamente a la página de contacto.
    // res.redirect('/contacts');

};

// Exporta las funciones de controlador para su uso en otros módulos.
module.exports = {
    renderContactsPage,
    handleContactForm,
};
