import { Router } from "express";

import { findAll, findById, create } from "../services/wizards.service";

const router = Router();

// @nanoapi path:/api/v1/wizards method:GET group:wizards
router.get("/", async (req, res) => {
  const wizards = await findAll();
  res.send(wizards);
});

// @nanoapi path:/api/v1/wizards/:id method:GET group:wizards
router.get("/:id", async (req, res) => {
  const wizard = await findById(req.params.id);
  res.send(wizard);
});

// @nanoapi path:/api/v1/wizards method:POST group:wizards
router.post("/", async (req, res) => {
  const wizard = req.body;
  const newWizard = await create(wizard);
  res.send(newWizard);
});

export default router;