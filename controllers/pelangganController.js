const { Pelanggan } = require("../models");

class PelangganController {
  async create(req, res) {
    try {
      let data = await Pelanggan.create(req.body);

      return res.status(201).json({
        message: "Pelanggan has been created",
        data,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error",
        error: error.message,
      });
    }
  }

  // get one
  async getOne(req, res) {
    try {
      let data = await Pelanggan.findOne({ where: { id: req.params.id } });

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
      let data = await Pelanggan.findAll();

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

      let updateData = await Pelanggan.update(data, {
        where: { id: req.params.id },
      });

      let updatedPelanggan = await Pelanggan.findOne({
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
      await Pelanggan.destroy({ where: { id: req.params.id } });

      return res.status(200).json({
        message: "Pelanggan has been deleted",
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error",
        error: error.message,
      });
    }
  }
}

module.exports = new PelangganController();
