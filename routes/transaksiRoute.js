const express = require("express"); // Import express
const router = express.Router(); // Make a router

// Import validator
const transaksiValidator = require("../middlewares/validators/transaksiValidator");

// Import controller
const transaksiController = require("../controllers/transaksiController");

router
  .route("/")
  .get(transaksiController.getAll)
  .post(transaksiValidator.create, transaksiController.create);

router
  .route("/:id")
  .get(transaksiController.getOne)
  .put(transaksiValidator.update, transaksiController.update)
  .delete(transaksiController.delete);

module.exports = router; // Export router
