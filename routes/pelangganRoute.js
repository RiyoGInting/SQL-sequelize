const express = require("express"); // Import express
const router = express.Router(); // Make a router

// Import validator
const validator = require("../middlewares/validators/pelangganValidator");

// Import controller
const pelangganController = require("../controllers/pelangganController");

router
  .route("/")
  .post(validator.create, pelangganController.create)
  .get(pelangganController.getAll);
router
  .route("/:id")
  .get(pelangganController.getOne)
  .put(validator.create, pelangganController.update)
  .delete(pelangganController.delete);

module.exports = router; // Export router
