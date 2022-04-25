const express = require('express');
// crear el servidor de express
const app = express();

// Lectura y parseo del body antes body parser
app.use(express.json());

// Rutas

app.use('/', require('./routes/top'));
// Escuchar peticiones
app.listen(3000, () => {
  console.log(`Servidor corriendo en puerto 3000`);
});
