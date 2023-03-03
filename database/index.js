const mongoose = require("mongoose");
const { dbHost, dbPass, dbName, dbPort, dbUser } = require("../app/config");
mongoose.set("strictQuery", false);

// mongoose.connect("mongodb://yusufjojo:yusufjojo@127.0.0.1/yusuf?authSource=yusuf");

// db.on("open", () => {
//   console.log("database running");
// });

mongoose.connect(`mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?authSource=admin`);
const db = mongoose.connection;
db.on("open", () => {
  console.log("database running");
});

module.exports = db;
