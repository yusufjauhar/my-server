const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let tagSchema = Schema({
  name: {
    type: String,
    minlength: [2, "panjang nama tag minimal 2 karakter"],
    maxlength: [20, "panjang nama tag maksimal 20 karakter"],
    required: [true, "nama tag harus di isi"],
  },
});

module.exports = model("Tag", tagSchema);
