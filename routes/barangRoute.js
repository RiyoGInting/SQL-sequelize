const express = require("express"); // Import express
const router = express.Router(); // Make a router

// Import validator
const validator = require("../middlewares/validators/pemasokValidator");
const barangValidator = require("../middlewares/validators/barangValidator");

// Import controller
const barangController = require("../controllers/barangController");

router
  .route("/")
  .post(validator.findPemasok, barangValidator.create, barangController.create)
  .get(barangController.getAll);
router
  .route("/:id")
  .get(barangController.getOne)
  .put(barangValidator.update, barangValidator.create, barangController.update)
  .delete(barangController.delete);

module.exports = router; // Export router
