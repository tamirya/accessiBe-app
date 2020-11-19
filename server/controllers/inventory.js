/*
Controller of Inventory
*/
const Inventory = require("../models/inventory");

// Get all items
exports.items = function(req, res) {
    Inventory.find(function(err,results) {
        if (err) return res.send(500).json(err);
        res.json(results);
    });
  };

  // create new inventory item 
  exports.add = function(req, res) {
      const item = req.body;
      Inventory.create(item,function(err,result) {
        if (err) return res.send(500).json(err);
        res.json(result); 
      })
  }

  // update inventory item by id
  exports.update = function(req,res) {
      Inventory.findByIdAndUpdate(req.params.id, { $set: req.body }, function(err,item) {
        if (err) return res.send(500).json(err);
        res.json("item updated.");
      });
  }