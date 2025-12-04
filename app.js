const express = require('express');
const path = require('path');

// app.js
const app = express();

// Configurar la carpeta 'public' para archivos estáticos (CSS, images)
app.use(express.static(path.join(__dirname, 'public')));

// RUTA 1: Home
app.get('/', (_req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

// RUTA 2: About
app.get('/about', (_req, res) => {
   res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

// RUTA 3: Works
app.get('/works', (_req, res) => {
   res.sendFile(path.join(__dirname, 'views', 'works.html'));
});

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Server is running on port 3000: http://localhost:3000');
});
