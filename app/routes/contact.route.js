const express = require("express");
const contact = require("../controllers/contact.controller");

const router = express.Router();

router.route("/")
    .get(contacts.findAll)
    .post(contacts.create)
    .delete(contacts.deleteAll);
router.route("/favorite")
    .get(contact.findAllFavorite);

router .route("/:id")
    .get(contact.findOne)
    .put(contac.update)
    .delete(contact.delete);
module.exports = router;