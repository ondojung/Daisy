import express, { Router } from 'express';

const router: Router = express.Router();

router.use('/room', require('./room'));

module.exports = router;