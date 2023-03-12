const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const orderItemSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Name must be filled"],
      minlength: [5, "panjang nama makanan minimal 5 karakter"],
    },
    price: {
      type: Number,
      required: [true, "Harga item harus diisi"],
    },
    qty: {
      type: Number,
      required: [true, "kuantitas item harus diisi"],
      minlength: [1, "kuantitas minimal 1"],
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
    order: {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  }
  // },{ timestamps: true }
);

module.exports = model("OrderItem", orderItemSchema);
