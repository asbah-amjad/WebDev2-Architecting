import express from 'express';
import { getOrder, addOrder, getOrderById } from '../controllers/order.js';

const router = express.Router();

router.get('/', getOrder);
router.post('/', addOrder);
router.get('/:id', getOrderById);

export default router;