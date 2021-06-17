const { Pemasok } = require("../models");

class PemasokController {
  async create(req, res) {
    try {
      let data = await Pemasok.create(req.body);

      return res.status(201).json({
        message: "Pemasok has been created",
        data,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error",
        error: error.message,
      });
    }
  }

  // get one pemasok
  async getOne(req, res) {
    try {
      let data = await Pemasok.findOne({ where: { id: req.params.id } });

      if (data == null) {
        res.status(404).json({
          message: "User not found",
        });
      }

      return res.status(200).json({
        message: "Success",
        data,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error",
        error: error.message,
      });
    }
  }

  async getAll(req, res) {
    try {
      let data = await Pemasok.findAll();

      if (data.length === 0) {
        return res.status(404).json({
          message: "Data not found",
        });
      }

      return res.status(200).json({
        message: "Success",
        data,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error",
        error: error.message,
      });
    }
  }

  async update(req, res) {
    try {
      let data = { nama: req.body.nama };

      let updateData = await Pemasok.update(data, {
        where: { id: req.params.id },
      });

      let updatedPemasok = await Pemasok.findOne({
        where: { id: req.params.id },
      });

      return res.status(201).json({
        message: "Profile updated",
        data,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error",
        error: error.message,
      });
    }
  }

  async delete(req, res) {
    try {
      await Pemasok.destroy({ where: { id: req.params.id } });

      return res.status(200).json({
        message: "Pemasok has been deleted",
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error",
        error: error.message,
      });
    }
  }
}

module.exports = new PemasokController();
