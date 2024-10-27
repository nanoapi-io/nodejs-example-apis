import { Router } from "express";

import * as elvesService from "./elves.service";

const router = Router();

// @nanoapi path:/api/v0/elves method:GET group:elves
router.get("/", async (req, res) => {
  const elves = await elvesService.findAll();
  res.send(elves);
});

// @nanoapi path:/api/v0/elves/:id method:GET group:elves
router.get("/:id", async (req, res) => {
  const elf = await elvesService.findById(req.params.id);
  res.send(elf);
});

// @nanoapi path:/api/v0/elves method:POST group:elves
router.post("/", async (req, res) => {
  const elf = req.body;
  const newElf = await elvesService.create(elf);
  res.send(newElf);
});

export default router;