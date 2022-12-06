const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Posteos = require("./posts")

const router = Router();
/*const posts = require("./posts");
const users = require("./users");*/

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



router.use("/posts", Posteos)
//router.use("/users", users);

module.exports = router;