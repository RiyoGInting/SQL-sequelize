const { Barang } = require("../models");

class BarangController {
  async create(req, res) {
    try {
      let data = await Barang.create(req.body);

      return res.status(201).json({
        message: "Barang has been created",
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
      let data = await Barang.findOne({ where: { id: req.params.id } });

      if (data == null) {
        res.status(404).json({
          message: "Barang not found",
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
      let data = await Barang.findAll();

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
      let data = {
        nama: req.body.nama,
        harga: req.body.harga,
        id_pemasok: req.body.id_pemasok,
      };

      let updateData = await Barang.update(data, {
        where: { id: req.params.id },
      });

      let updatedPelanggan = await Barang.findOne({
        where: { id: req.params.id },
      });

      return res.status(201).json({
        message: "Barang updated",
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
      await Barang.destroy({ where: { id: req.params.id } });

      return res.status(200).json({
        message: "Barang has been deleted",
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error",
        error: error.message,
      });
    }
  }
}

module.exports = new BarangController();
