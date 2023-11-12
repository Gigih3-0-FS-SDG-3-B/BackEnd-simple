import { getOrder, getAllOrderByUserId, createOrder, updateOrder } from "../../repositories/orderRepository.js";

export const createOrderController = async (req, res) => {
  try {
    const orderData = req.body;
    const newOrder = await createOrder(orderData)
    res.json(newOrder);
  } catch (error) {
    res.status(500).json({ error: `An error occurred ${error}` });
  }
};

export const getAllOrdersByUserController = async (req, res) => {
  try {
    const userId = req.query.user_id;
    const allOrders = await getAllOrderByUserId(userId)
    res.json(allOrders);
  } catch (error) {
    res.status(500).json({ error: `An error occurred ${error}` });
  }
};

export const getOneOrderController = async (req, res) => {
  try {
    const orderId = req.params.order_id;
    const selectedOrder = await getOrder(orderId)
    res.json(selectedOrder);
  } catch (error) {
    res.status(500).json({ error: `An error occurred ${error}` });
  }
};

export const updateOrderController = async (req, res) => {
  try {
    const orderId = req.params.order_id;
    const orderData = req.body;
    const updatedOrder = await updateOrder(orderId, orderData)
    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ error: `An error occurred ${error}` });
  }
};
