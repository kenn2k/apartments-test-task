import { Request, Response } from "express";
import * as AptService from "../services/apartment.services";

export async function listApartments(req: Request, res: Response) {
  try {
    const filters = req.query;
    const items = await AptService.findAll(filters);
    res.status(200).json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

export async function createApartment(req: Request, res: Response) {
  try {
    const data = req.body;
    const newApt = await AptService.create(data);
    res.status(200).json(newApt);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

export async function updateApartment(req: Request, res: Response) {
  const { id } = req.params;

  const updates = req.body;
  const updated = await AptService.update(id, updates);
  res.json(updated);
}

export async function deleteApartment(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const deleted = await AptService.remove(id);
    const status = deleted ? 200 : 404;
    const message = deleted ? "Deleted successfully" : "Not found";

    res.status(status).json({ message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}
