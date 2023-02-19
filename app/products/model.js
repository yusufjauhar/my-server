const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const productSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "nama makanan harus diisi"],
      minlength: [2, "panjang nama makanan minimal 2 karakter"],
      maxlength: [40, "nama makanan terlalu panjang"],
    },

    description: {
      type: String,
      maxlength: [1000, "panjang dekskripsi maksimal 1000 karakter"],
    },

    price: {
      type: Number,
      default: 0,
    },

    image_url: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = model("Product", productSchema);
