const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const inventoryRouter = require("./routes/inventory");
const cors = require('cors');
const port = 3000;

const app = express();
app.use(cors({origin: '*'}));
const mongoDB = "mongodb://mongo:27017/accessiBe";
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", inventoryRouter);

app.listen(port, () => {
  console.log("Server is up and running on port number " + port);
});

require("./controllers/inventory").seeder();