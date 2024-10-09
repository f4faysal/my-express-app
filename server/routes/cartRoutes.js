
 
import express from 'express';
 

const router = express.Router();

router.post('/cart/', userCart);   
router.post('/cart/sync', userCartSync);   

export default router;
