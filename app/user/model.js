const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const autoIncrement = require("mongoose-sequence")(mongoose);
const bcrypt = require("bcrypt");

let userSchema = Schema(
  {
    full_name: {
      type: String,
      required: [true, "nama harus di isi"],
      maxlength: [255, "panjang nama harus 3 - 255 karakter"],
      minlength: [3, "panjang nama harus 3 - 255 karakter"],
    },
    customer_id: {
      type: Number,
    },
    email: {
      type: String,
      required: [true, "email harus di isi"],
      maxlength: [255, "panjang email maksimal 255 karakter"],
    },
    password: {
      type: String,
      required: [true, "password harus di isi"],
      maxlength: [255, "panjang password maksimal 255 karakter"],
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    token: [String],
  },
  { timestamps: true }
);

userSchema.path("email").validate(
  function (value) {
    const EMAIL_RE = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return EMAIL_RE.test(value);
  },
  (Attr) => `${Attr.value} harus merupakan email yang valid!`
);

userSchema.path("email").validate(
  async function (value) {
    try {
      //lakukan pencarian ke collection user berdasarkan 'email'
      const count = await this.model("User").count({ email: value });

      return !count;
    } catch (err) {
      throw err;
    }
  },
  (Attr) => `${Attr.value} sudah terdaftar!`
);

const HASH_ROUND = 10;
userSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, HASH_ROUND);
  next();
});

userSchema.plugin(autoIncrement, { inc_field: "customer_id" });

module.exports = model("User", userSchema);
