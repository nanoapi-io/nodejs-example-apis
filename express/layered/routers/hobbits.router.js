import { Router } from "express";

import * as hobbitsService from "../services/hobbits.service";

const router = Router();

// @nanoapi path:/api/v2/hobbits method:GET group:hobbits
router.get("/", async (req, res) => {
  const hobbits = await hobbitsService.findAll();
  res.send(hobbits);
});

// @nanoapi path:/api/v2/hobbits/:id method:GET group:hobbits
router.get("/:id", async (req, res) => {
  const hobbit = await hobbitsService.findById(req.params.id);
  res.send(hobbit);
});

// @nanoapi path:/api/v2/hobbits method:POST group:hobbits
router.post("/", async (req, res) => {
  const hobbit = req.body;
  const newHobbit = await hobbitsService.create(hobbit);
  res.send(newHobbit);
});

export default router;