import { Router } from "express";
import { getRoom, getRooms } from "../controllers/room.controller.js";

const router=Router();

router.get('/rooms', getRooms);  
router.get('/rooms/:id', getRoom);

export default router;