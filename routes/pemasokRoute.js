const express = require("express"); // Import express
const router = express.Router(); // Make a router

// Import validator
const validator = require("../middlewares/validators/pemasokValidator");

// Import controller
const pemasokController = require("../controllers/pemasokController");

router
  .route("/")
  .get(pemasokController.getAll)
  .post(validator.create, pemasokController.create);
router
  .route("/:id")
  .get(pemasokController.getOne)
  .delete(pemasokController.delete)
  .put(validator.findPemasok, pemasokController.update);

module.exports = router; // Export router
