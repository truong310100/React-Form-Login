const express = require("express");
const cors = require("cors");

const mongoose = require("./config/mongoose");
const authRoutes = require("./routes/auth");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", authRoutes);

const PORT = 8000;
app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`);});
