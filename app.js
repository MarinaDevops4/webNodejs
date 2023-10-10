const express = require('express');
const bodyParser = require('body-parser');
const contactsRouter = require ('./conexion/manejador');

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));


// activar menu
app.use((req, res, next) => {
  res.locals.activePath = req.path; // Store the current path in res.locals
  next();
});

// usar la solicitud de envio formulario
app.use('/contacts', contactsRouter);

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('home', { activePath: res.locals.activePath });
});

app.get('/tos', (req, res) => {
  res.render('tos', { activePath: res.locals.activePath });
});

app.get('/contacts', (req, res) => {
  res.render('contacts', { activePath: res.locals.activePath });
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
