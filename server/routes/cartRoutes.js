import express from 'express';
import { getCart, cartSync } from '../controllers/cartController.js';

const router = express.Router();

router.get('/', getCart);  // Endpoint to get the cart
router.post('/sync', cartSync); // Example endpoint to add items to the cart

export default router;
