const { Router } = import("express");

const hobbitsService = import("../services/hobbits.service");

const router = Router();

// @nanoapi method:GET path:/api/v2/hobbits group:hobbits
router.get("/", async (req, res) => {
  const hobbits = await hobbitsService.findAll();
  res.send(hobbits);
});

// @nanoapi method:GET path:/api/v2/hobbits/:id group:hobbits
router.get("/:id", async (req, res) => {
  const hobbit = await hobbitsService.findById(req.params.id);
  res.send(hobbit);
});

// @nanoapi method:POST path:/api/v2/hobbits group:hobbits
router.post("/", async (req, res) => {
  const hobbit = req.body;
  const newHobbit = await hobbitsService.create(hobbit);
  res.send(newHobbit);
});

export default router;