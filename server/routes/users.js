import express from 'express';

import {login , signup } from '../controllers/auth.js'
const router = express.Router();

router.post('/signup', login)
router.post('/login', signup)

export default router;