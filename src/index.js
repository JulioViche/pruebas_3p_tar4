// Importar el módulo express
const express = require('express');
// Crear una instancia de la aplicación express
const app = express();

// Endpoint sencillo que responde con un mensaje
app.get('/', (req, res) => {
	res.send('¡Servidor Express funcionando correctamente!');
});

// Levantar el servidor en el puerto 3000
app.listen(3000, () => {
	console.log('Servidor escuchando en http://localhost:3000');
});
