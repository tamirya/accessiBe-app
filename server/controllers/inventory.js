let Inventory  = require("../models/inventory");
const seedData = [{
  "name": "item 0",
  "guid": "e21e4000-59a1-45fa-a9af-5d4cc0bfe63e",
  "available": false,
  "missing": true,
  "request": "new",
  "qty": 40
},{
  "name": "item 1",
  "guid": "fa12d47a-f27b-45ab-b6ef-74f2649e8ed5",
  "available": true,
  "missing": false,
  "request": "missing",
  "qty": 9
},{
  "name": "item 2",
  "guid": "5d120669-f507-4b4d-bdc6-e49d5bcdc629",
  "available": true,
  "missing": false,
  "request": "missing",
  "qty": 38
},{
  "name": "item 3",
  "guid": "bd1d1074-0f00-4d03-bb91-9bf90fd94674",
  "available": true,
  "missing": false,
  "request": "missing",
  "qty": 28
},{
  "name": "Item test 1",
  "guid": "123467910",
  "qty": 20,
  "available": false,
  "missing": true
},{
  "name": "Item test 2",
  "guid": "123467910",
  "qty": 35,
  "available": false,
  "missing": true
},{
  "name": "Item test 3",
  "guid": "123467910",
  "qty": 55,
  "available": true,
  "missing": false
},{
  "name": "Item test 1",
  "guid": "123467910",
  "qty": 20,
  "available": false,
  "missing": true
},{
  "name": "Item test 85",
  "guid": "123467910",
  "qty": 20,
  "available": false,
  "missing": true
},{
  "name": "Item test 12",
  "guid": "123467910",
  "qty": 65,
  "available": false,
  "missing": true
},{
  "name": "Item test 154",
  "guid": "23133",
  "qty": 80,
  "available": false,
  "missing": true
},{
  "name": "Item test 1987",
  "guid": "123467910",
  "qty": 20,
  "available": true,
  "missing": false
}];


exports.items = function(req, res) {
    Inventory.find(function(err,results) {
        if (err) return next(err);
        res.json(results);
    });
  };

  exports.add = function(req, res, next) {
      const item = req.body;
      Inventory.create(item,function(err,result) {
        if (err) return next(err);
        res.json(result); 
      })
  }

  exports.update = function(req,res,next) {
      Inventory.findByIdAndUpdate(req.params.id, { $set: req.body }, function(err,item) {
        if (err) return res.send(500).json(err);
        res.json("item updated.");
      });
  }

  exports.seeder = function() {
      for (let index = 0; index < seedData.length; index++) {
        Inventory.create(seedData[index],function(err,result) {
          if (err) return console.log(err);
        })
      }
  }