const { Router } = require('express');
const router = Router();

const { topSecret } = require('../controllers/topSecret');

router.post('/topsecret', topSecret);
module.exports = router;
