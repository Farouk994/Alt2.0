const express = require("express");
require("./database/db")();
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const app = express();

// Port
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(["http://localhost:3000"]));

if (app.get("env") === "development") {
   app.use(morgan("tiny"));
}


app.use("/api/school", require("./routes/school"));

const server = app.listen(PORT, () => {
   console.log("Listening to PORT " + PORT + " ===>");
});

module.exports = server;
