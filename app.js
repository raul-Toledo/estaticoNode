const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));
//Escuchar el ppuerto 3000
app.listen(3000, () => {
    console.log('Escuchando el puerto 3000');
});