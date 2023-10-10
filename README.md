# webNodejs
Nodejs + Express App con MySQL y Nodemailer
Esta es una aplicación simple creada con Node.js y Express que consta de tres páginas: una página de inicio, una página de Términos y Condiciones (ToS) y una página de contacto. 
La aplicación permite a los usuarios enviar mensajes a través de un formulario en la página de contacto. 
Los mensajes se almacenan en una base de datos MySQL y se envía un correo electrónico de confirmación al usuario después de enviar el formulario.

<h2>Contenido</h2>
<ul>
<li>Requisitos</li>
<li>Configuración</li>
<li>Ejecución</li>
<li>Uso</li>
<li>Contribución</li>
</ul>

Asegúrate de tener instalado lo siguiente antes de ejecutar la aplicación:

<ul>
<li>Node.js</li>
<li>Express</li>
<li>MySQL</li>
<li>Git (opcional, para clonar este repositorio)</li>
</ul>

1. Clona este repositorio o descarga el código fuente
git clone [https://github.com/tuusuario/tu-repositorio.git](https://github.com/MarinaDevops4/webNodejs.git)
2. Ve al directorio del proyecto.
cd tu-proyecto
3. Instala las dependencias.
npm install
4. Configura la base de datos MySQL
   <ul>
<li>Crea una base de datos MySQL.</li>
<li>Copia la tabla que hay en el archivo sql en la carpeta conexion</li>

</ul>
#Ejecucion
Para ejecutar la aplicación, simplemente utiliza el siguiente comando:
npm start
La aplicación se ejecutará en http://localhost:3000 de forma predeterminada. Puedes acceder a ella en tu navegador web.
#Uso
La aplicación consta de tres páginas:
   <ul>
<li>Página de inicio: Accede a la página principal en http://localhost:3000/.</li>
<li>Página de Términos y Condiciones (ToS): Accede a los Términos y Condiciones en http://localhost:3000/tos.</li>
<li>Página de Contacto: Accede a la página de contacto en http://localhost:3000/contacts. Desde esta página, los usuarios pueden completar un formulario y enviar mensajes.</li>

</ul>
Después de enviar el formulario de contacto, los mensajes se almacenan en la base de datos MySQL y se envía un correo de confirmación al usuario con Nodemailer.
