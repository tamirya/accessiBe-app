let express = require("express");
let router = express.Router();
const inventory_controller = require("../controllers/inventory");
// get all items
router.get("/items", inventory_controller.items);
// create new item
router.post("/item/add", inventory_controller.add);
// update item by id
router.put("/item/:id/update", inventory_controller.update);

module.exports = router;