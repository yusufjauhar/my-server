const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let categorySchema = Schema({
  name: {
    type: String,
    minlength: [2, "panjang nama kategori minimal 2 karakter"],
    maxlength: [20, "panjang nama kategori maksimal 20 karakter"],
    required: [true, "nama kategori harus di isi"],
  },
});

module.exports = model("Category", categorySchema);
