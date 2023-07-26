const express = require("express");
const { PaySchema, Contact } = require("../models");
const router = express.Router();
router.post("/payment", async (req, res) => {
  const rs = await PaySchema.create(req.body);
  res.send({ status: 200, success: true, message: "successfully" });
});
router.get("/payschemas", async (req, res) => {
  const ps = await PaySchema.find({});
  res.send({ status: 200, success: true, payschemas: ps });
});

router.put("/payment/:id", async (req, res) => {
  const paymentId = req.params.id;
  const updatedData = req.body;

  try {
    const updatedPayment = await PaySchema.findByIdAndUpdate(paymentId, updatedData, { new: true });
    if (!updatedPayment) {
      return res.status(404).send({ status: 404, success: false, message: "Payment not found" });
    }
    res.send({ status: 200, success: true, message: "Payment updated successfully", payment: updatedPayment });
  } catch (error) {
    console.error("Error updating payment:", error);
    res.status(500).send({ status: 500, success: false, message: "Internal server error" });
  }
});


router.post("/contactApi", async (req, res) => {
  const rs = await Contact.create(req.body);
  res.send({ status: 200, success: true, message: "successfully" });
});
router.get("/getContactApi", async (req, res) => {
  const ps = await Contact.find({});
  res.send({ status: 200, success: true, payschemas: ps });
});

module.exports = router;
