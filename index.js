// Express
const express = require("express");
const app = express();

// Import routes
const pemasokRoute = require("./routes/pemasokRoute");
const pelangganRoute = require("./routes/pelangganRoute");
const barangRoute = require("./routes/barangRoute");
const transaksiRoute = require("./routes/transaksiRoute");

//Set body parser for HTTP post operation
app.use(express.json()); // support json encoded bodies
app.use(
  express.urlencoded({
    extended: true,
  })
); // support encoded bodies

// set static assets to public directory (usually for images, videos, and other files)
app.use(express.static("public"));

// Import table relationship
// require("./utils/associations");

// app.use
app.use("/pemasok", pemasokRoute);
app.use("/pelanggan", pelangganRoute);
app.use("/barang", barangRoute);
app.use("/transaksi", transaksiRoute);

// Server running
app.listen(3000, () => console.log("server running on port 3000"));
