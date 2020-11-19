// express
const express = require("express");
const bodyParser = require("body-parser");
// monogo DB
const mongoose = require("mongoose");
const mongoDB = "mongodb://mongo:27017/accessiBe";
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
// seeding
require('./seeder/seeder')();
const cors = require('cors');
const port = 3000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// cors
app.use(cors({origin: '*'}));

// routes 
const inventoryRouter = require("./routes/inventory");
const usersRouter = require("./routes/users");
app.use("/api/inventory", inventoryRouter);
app.use("/api/users", usersRouter);

// DB Error Handler
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// app lunch
app.listen(port, () => {
  console.log("Server is up and running on port number " + port);
});
