const express = require('express');
const path = require('path');
const app = express();

// Ruta raíz
app.get('/', (req, res) => {
  res.send('¡Hilari Martinez!')
})

app.get('/clientes', (req, res) =>{
    res.sendFile(path.join(__dirname, 'clientes.html'));
})

app.get('/productos', (req, res) => {
    res.sendFile(path.join(__dirname, 'productos.html'));
})

// Puerto de escucha
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})