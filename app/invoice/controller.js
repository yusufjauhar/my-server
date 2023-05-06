const Invoice = require("../invoice/model");

const show = async (req, res, next) => {
  try {
    let order_id = req.params.order_id;
    let invoice = await Invoice.findOne({ order: order_id }).populate("order").populate("user");

    // console.log(order_id);
    return res.json(invoice);
  } catch (err) {
    return res.json({
      error: 1,
      message: "Error when getting invoice",
    });
  }
};

module.exports = {
  show,
};
