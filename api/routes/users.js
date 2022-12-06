const { Router } = require("express");
const { getUsers, findOrCreateUser } = require("../controllers/users");

const router = Router();

router.get("/", getUsers);
router.post("/", findOrCreateUser);

module.exports = router;
