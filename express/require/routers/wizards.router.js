const { Router } = require("express");

const { findAll, findById, create } = require("../services/wizards.service");

const router = Router();

// @nanoapi method:GET path:/api/v1/wizards group:wizards
router.get("/", async (req, res) => {
  const wizards = await findAll();
  res.send(wizards);
});

// @nanoapi method:GET path:/api/v1/wizards/:id group:wizards
router.get("/:id", async (req, res) => {
  const wizard = await findById(req.params.id);
  res.send(wizard);
});

// @nanoapi method:POST path:/api/v1/wizards group:wizards
router.post("/", async (req, res) => {
  const wizard = req.body;
  const newWizard = await create(wizard);
  res.send(newWizard);
});

export default router;