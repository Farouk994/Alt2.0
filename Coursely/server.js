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
app.use(morgan("tiny"));
app.use(cors());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
   app.use(express.static("client/build"));
   app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
   });
}

app.use("/api/school", require("./routes/school"));

const server = app.listen(PORT, () => {
   console.log("Listening to PORT " + PORT + " ===>");
});

module.exports = server;
