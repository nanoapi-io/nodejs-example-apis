import { Router } from "express";

import { findAll, findById, create } from "../services/wizards";

const router = Router();

// @nanoapi path:/api/v0/wizards/ method:GET
router.get("/", async (req, res) => {
  const wizards = await findAll();
  res.send(wizards);
});

// @nanoapi path:/api/v0/wizards/:id method:GET
router.get("/:id", async (req, res) => {
  const wizard = await findById(req.params.id);
  res.send(wizard);
});

// @nanoapi path:/api/v0/wizards/ method:POST
router.post("/", async (req, res) => {
  const wizard = req.body;
  const newWizard = await create(wizard);
  res.send(newWizard);
});

export default router;