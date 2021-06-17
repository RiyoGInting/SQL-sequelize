const validator = require("validator");
const { Pemasok } = require("../../models");

exports.create = async (req, res, next) => {
  try {
    let errors = [];

    if (!validator.isAlpha(req.body.nama, ["en-US"], { ignore: " " })) {
      errors.push("Name can not contain number or special characters");
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

exports.findPemasok = async (req, res, next) => {
  try {
    let data = await Pemasok.findOne({
      where: { id: req.params.id },
    });

    if (!data) {
      return res.status(404).json({
        message: "Data not found",
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
