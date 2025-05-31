import { Router } from "express";
import {
  createApartment,
  deleteApartment,
  listApartments,
  updateApartment,
} from "../controllers/apartment.controller";

const router = Router();

router.get("/", listApartments);

router.post("/", createApartment);

router.patch("/:id", updateApartment);

router.delete("/:id", deleteApartment);

export default router;
