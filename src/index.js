import express from 'express';
import roomRoutes from './routes/room.routes.js';
import bookingRoutes from './routes/booking.routes.js';

const app = express();
const port = 3000;
app.use(express.json())

app.use(roomRoutes);
app.use(bookingRoutes);

// Iniciando el servidor
app.listen(port, () => {
  console.log('Servidor iniciado en el puerto 3000');
});