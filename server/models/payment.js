const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const paySchema = new Schema({
  FirstName:{ type: String},
  LastName:{ type: String},
  Email:{ type: String},
  Phone:{ type: String},
  Package: { type: String},
  Price: { type: String},
  Date:{ type: String},
  Time:{ type: String},
  Address:{ type: String},
  PostCode:{ type: String},
  City:{ type: String},
  cardNumber:{ type: String},
  cardHolderName:{ type: String},
  client: {type: String},
  status:{type: String, default:"Confirmation Pending"}
});

const PaySchema = mongoose.model("PaySchema",paySchema)

module.exports = PaySchema 


