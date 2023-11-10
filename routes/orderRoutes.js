import { Router } from 'express';
import * as orderController from '../controllers/order/orderController.js';

const router = Router();

router.get('/:order_id', orderController.getOneOrderController);
router.post('/', orderController.createOrderController);
router.put('/:order_id', orderController.updateOrderController);

export default router;