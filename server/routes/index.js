const express = require("express");
const { PaySchema } = require("../models");
const router = express.Router();
router.post("/payment", async (req, res) => {
  const rs = await PaySchema.create(req.body);
  res.send({ status: 200, success: true, message: "successfully" });
});
router.get("/payschemas", async (req, res) => {
  const ps = await PaySchema.find({});
  res.send({ status: 200, success: true, payschemas: ps });
});

module.exports = router;
