const express = require('express');
const router = express.Router();

router.get('/available-apps', require('../commands/availableApps'));
router.get('/running-apps', require('../commands/runningApps'));
router.post('/enable-app', require('../commands/enableApp'));
router.post('/start-app', require('../commands/startApp'));
router.post('/restart-app', require('../commands/restartApp'));
router.post('/stop-app', require('../commands/stopApp'));
router.post('/disable-app', require('../commands/disableApp'));

module.exports = router;
