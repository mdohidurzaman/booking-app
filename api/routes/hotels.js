import express from "express";
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updetedHotel,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);
//UPDATE
router.put("/:id", verifyAdmin, updetedHotel);
//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
//GET
router.get("/:id", getHotel);
//GET ALL
router.get("/", getHotels);
export default router;
