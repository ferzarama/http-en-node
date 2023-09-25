const http = require('http');
const HOST = 'localhost';
const PUERTO = 1080; 

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  const mensaje = JSON.stringify({ nombre: 'Fer Zarama Pardo', mensaje: 'Hola colega desde mi servidor!' });
  res.end(mensaje);
});

server.listen(PUERTO, HOST, () => {
  const mensajeConsola = `Servidor escuchando en http://${HOST}:${PUERTO}`;
  console.log(require('chalk').green(mensajeConsola));
});

