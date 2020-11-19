let express = require("express");
let router = express.Router();

const inventory_controller = require("../controllers/inventory");
router.get("/items", inventory_controller.items);
router.post("/item/add", inventory_controller.add);
router.put("/item/:id/update", inventory_controller.update);

module.exports = router;