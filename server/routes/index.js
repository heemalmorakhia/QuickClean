const express = require('express')
const {PaySchema} = require('../models')
const router = express.Router()
router.post('/payment',async (req,res)=>{
  const rs = await PaySchema.create(req.body);
  res.send({status:200,success:true,message:'successfully'})
})


module.exports = router