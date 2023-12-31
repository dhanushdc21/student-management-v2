const express = require('express');
const router = express.Router();

const adminIdService = require('../service/admin_id');
const adminService = require('../service/admin');
const idGetService = require('../service/id_get');
const idPatchService = require('../service/id_patch');
const rootService = require('../service/root');

router.get('/service/admin_id/:id', adminIdService);
router.get('/service/admin', adminService);
router.get('/service/id_get/:id', idGetService);
router.patch('/service/id_patch/:id', idPatchService);
router.get('/service/root', rootService);

module.exports = router;
