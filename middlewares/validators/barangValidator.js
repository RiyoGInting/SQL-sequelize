const validator = require("validator");
const { Pemasok } = require("../../models");

exports.create = async (req, res, next) => {
  try {
    let errors = [];

    if (req.body.harga && !validator.isNumeric(req.body.harga)) {
      errors.push("Please insert a valid number for price");
    }

    if (errors.length > 0) {
      return res.status(400).json({
        message: errors.join(", "),
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      message: "Error",
      error: error.message,
    });
  }
};

exports.update = async (req, res, next) => {
  try {
    let data = await Pemasok.findOne({ where: { id: req.body.id_pemasok } });

    if (!data) {
      return res.status(404).json({
        message: "Pemasok not found",
      });
    }

    next();
  } catch (err) {
    return res.status(500).json({
      message: "Error",
      error: err.message,
    });
  }
};
