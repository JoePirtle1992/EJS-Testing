const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const mahFirstRoute = require("./stuff/mahRoutes.js");


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/radiohead", mahFirstRoute);

app.use(cors());
app.options("*", cors());
app.use(express.static(__dirname + '/public'));

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const APORT = process.env.MYPORT || 5000;
const DATABASE = process.env.MYDATABASE;

mongoose
  .connect(DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false,
  })
  .then(console.log("DATABASE CONNECTED!!!"));

app.set("view engine", "ejs");

app.listen(APORT, () => {
  console.log(`Listening on port ${APORT}`);
});
