const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const CartItemSchema = Schema({
  name: {
    type: String,
    minlength: [5, "panjang nama makanan minimal 50 karakter"],
    required: [true, "name must be filled"],
  },
  qty: {
    type: Number,
    minlength: [1, "minimal qty adalah 1"],
    required: [true, "qty harus diisi"],
  },
  price: {
    type: Number,
    default: 0,
  },

  image_url: String,

  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
});

module.exports = model("cartItem", CartItemSchema);
