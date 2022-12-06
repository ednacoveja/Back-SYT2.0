const { Router } = require('express');
const Users = require('./users')

const router = Router();

router.use('/users', Users)

module.exports = router;