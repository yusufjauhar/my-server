const { police_check } = require("../../middlewares");
const deliveryAddressController = require("./controller");

const router = require("express").Router();

// router.post("/delivery-addresses", police_check("create", "Deliveryaddress"), deliveryAddressController.store);
router.post("/delivery-addresses", deliveryAddressController.store);
router.put("/delivery-addresses/:id", deliveryAddressController.update);
router.delete("/delivery-addresses/:id", deliveryAddressController.destroy);
router.get("/delivery-addresses", deliveryAddressController.index);
// router.get("/delivery-addresses", police_check("view", "Deliveryaddress"), deliveryAddressController.index);

module.exports = router;
