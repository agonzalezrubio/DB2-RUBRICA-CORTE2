import express from 'express';
import roomRoutes from './routes/room.routes.js';
import bookingRoutes from './routes/booking.routes.js';

import { APP_PORT } from './config.js';

const app = express();
app.use(express.json())

app.use(roomRoutes);
app.use(bookingRoutes);

app.listen(APP_PORT, () => {
  console.log(`App iniciada en el puerto ${APP_PORT}`);
});