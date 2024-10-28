import express from 'express';

import { getProduct } from '../controller/ProductController.js';

const router=express.Router()

router.get('/',getProduct)


export default router;