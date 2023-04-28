import { Router } from "express";
import { createBooking, deleteBooking, updateBooking } from "../controllers/booking.controller.js";

const router=Router();

router.post('/bookings', createBooking);

router.patch('/bookings/:id', updateBooking);

router.delete('/bookings/:id', deleteBooking);

export default router;