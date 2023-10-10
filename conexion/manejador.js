
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');


const db = require('../conexion/db');

// Manejar la solicitud POST desde el formulario de contacto
router.post('/', (req, res) => {
    const { name, email, subject, message } = req.body;

    const query = 'INSERT INTO contactos (name, email, subject, message) VALUES (?, ?, ?, ?)';
    const values = [name, email, subject, message];

    db.query(query, values, (error, results) => {
        if (error) {
            console.error('Error al insertar datos:', error);
            res.send('Error al enviar el formulario.');
        } else {


            const transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: 'marinadevops@gmail.com',
                    pass: 'drqr fvzc tnww nccj'
                },
            });
            // Envía un correo electrónico al nuevo usuario
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

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('Error al enviar el correo:', error);
                } else {
                    console.log('Correo enviado con éxito:', info.response);
                }
            });

            console.log('Datos insertados correctamente');
            res.redirect('/');




        }
    });
});

module.exports = router;