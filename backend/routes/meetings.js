const express = require('express');
const router = express.Router();
const { create, getAll } = require('../controllers/meetingController');
const auth = require('../middleware/auth');

router.post('/', create);
router.get('/', auth, getAll);

module.exports = router;