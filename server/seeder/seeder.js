// mongoose
const mongoose = require("mongoose");
const mongoDB = "mongodb://mongo:27017/accessiBe";
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
// models
const Inventory = require("../models/inventory");
const User     = require("../models/users");
// mock-data
const inventoryDB = require("../mock-data/inventory.json");
const userDB = require("../mock-data/users.json");

module.exports = async function(){
    console.log('Seeding...')
    // insert inventory DB
    for (let index = 0; index < inventoryDB.length; index++) {
        const element = inventoryDB[index];
        const inventory = new Inventory(element);
        await inventory.save();
    }

    // insert users DB
    for (let index = 0; index < userDB.length; index++) {
        const element = userDB[index];
        const user = new User(element)
        await user.save()
    }
}