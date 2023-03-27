const { Router } = require("express");
const Posteos = require("./posts");
const Users = require("./users");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/posts", Posteos);

router.use("/users", Users);

module.exports = router;
