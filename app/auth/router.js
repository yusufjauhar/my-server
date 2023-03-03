const router = require("express").Router();
const passport = require("passport");
const authController = require("./controller");
const LocalStrategy = require("passport-local").Strategy;

passport.use(new LocalStrategy({ usernameField: "email" }, authController.localStrategy));
router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/logout", authController.logout);
router.get("/me", authController.me);
router.get("/allUser", authController.getAllUsers);

module.exports = router;
