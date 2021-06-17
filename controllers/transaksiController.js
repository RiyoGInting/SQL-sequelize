const { Transaksi } = require("../models"); // Import all models

class TransaksiController {
  // Get all transaksi data
  async getAll(req, res) {
    try {
      let data = await Transaksi.findAll({
        // find all data of Transaksi table
        attributes: ["id", "jumlah", "total", ["createdAt", "waktu"]], // just these attributes that showed
      });

      // If data is nothing
      if (data.length === 0) {
        return res.status(404).json({
          message: "Transaksi Not Found",
        });
      }

      // If success
      return res.status(200).json({
        message: "Success",
        data,
      });
    } catch (e) {
      // If error
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }

  // Get One transaksi
  getOne(req, res) {
    // Promise
    // FindOne transaksi
    Transaksi.findOne({
      where: { id: req.params.id },
      attributes: ["id", "jumlah", "total", ["createdAt", "waktu"]], // just these attributes that showed
    })
      .then((data) => {
        // If transaksi not found
        if (!data) {
          return res.status(404).json({
            message: "Transaksi Not Found",
          });
        }

        // If success
        return res.status(200).json({
          message: "Success",
          data: data,
        });
      })
      .catch((e) => {
        // If error
        return res.status(500).json({
          message: "Internal Server Error",
          error: e,
        });
      });
  }

  // Create Data
  async create(req, res) {
    try {
      // Will create data
      let createdData = await Transaksi.create({
        id_barang: req.body.id_barang,
        id_pelanggan: req.body.id_pelanggan,
        jumlah: req.body.jumlah,
        total: req.body.total,
      });

      // Find the new transaksi
      let data = await Transaksi.findOne({
        where: { id: createdData.id },
        attributes: ["id", "jumlah", "total", ["createdAt", "waktu"]], // just these attributes that showed
      });

      // If success
      return res.status(201).json({
        message: "Success",
        data,
      });
    } catch (e) {
      // If error
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }

  // Update data
  async update(req, res) {
    let update = {
      id_barang: req.body.id_barang,
      id_pelanggan: req.body.id_pelanggan,
      jumlah: req.body.jumlah,
      total: req.body.total,
    };

    try {
      // Transaksi table update data
      let updatedData = await Transaksi.update(update, {
        where: {
          id: req.params.id,
        },
      });

      // Find the updated transaksi
      let data = await Transaksi.findOne({
        where: { id: req.params.id },
        attributes: ["id", "jumlah", "total", ["createdAt", "waktu"]], // just these attributes that showed
      });

      // If success
      return res.status(201).json({
        message: "Success",
        data,
      });
    } catch (e) {
      // If error
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }

  // Delete Data
  async delete(req, res) {
    try {
      // Delete data
      let data = await Transaksi.destroy({ where: { id: req.params.id } });

      // If data deleted is null
      if (!data) {
        return res.status(404).json({
          message: "Transaksi Not Found",
        });
      }

      // If success
      return res.status(200).json({
        message: "Success delete transaksi",
      });
    } catch (e) {
      // If error
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }
}

module.exports = new TransaksiController();
