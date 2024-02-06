import express from 'express'

import { checkout } from '../controllers/Payment.js'
// import auth from  '../middleware/auth.js'


const router = express.Router()

router.post('/checkout', checkout )

export default router