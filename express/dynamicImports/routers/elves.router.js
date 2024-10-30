const { Router } = import("express");

const elvesService = import("../services/elves.service");

const router = Router();

// @nanoapi method:GET path:/api/v0/elves group:elves
router.get("/", async (req, res) => {
  const elves = await elvesService.findAll();
  res.send(elves);
});

// @nanoapi method:GET path:/api/v0/elves/:id group:elves
router.get("/:id", async (req, res) => {
  const elf = await elvesService.findById(req.params.id);
  res.send(elf);
});

// @nanoapi method:POST path:/api/v0/elves group:elves
router.post("/", async (req, res) => {
  const elf = req.body;
  const newElf = await elvesService.create(elf);
  res.send(newElf);
});

export default router;