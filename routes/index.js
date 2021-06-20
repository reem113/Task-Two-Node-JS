const express = require('express');

const router = express.Router();

const todos = require('./todos');
const users = require('./users');

router.use('./todos',todos);
router.use('./users',users);

module.exports = router;