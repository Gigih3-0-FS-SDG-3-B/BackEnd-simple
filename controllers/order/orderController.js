import { withPrisma } from "../../middlewares/prismaMiddleware.js";
import { v4 as uuidv4 } from "uuid";

export const createOrderController = async (req, res) => {
  try {
    const { caregiver_id, user_id, date_start, date_end, price, address } =
      req.body;

    const newOrder = await withPrisma(async (prisma) => {
      return prisma.orders.create({
        data: {
          order_id: uuidv4(),
          caregiver_id: caregiver_id,
          user_id: user_id,
          order_status: 0,
          date_start: new Date(date_start).toISOString(),
          date_end: new Date(date_end).toISOString(),
          price: price,
          address: address,
        },
      });
    });

    res.json(newOrder);
  } catch (error) {
    res.status(500).json({ error: `An error occurred ${error}` });
  }
};

export const getOrderController = async (req, res) => {
  try {
    const order_id = req.params.order_id;

    const selectedOrder = await withPrisma(async (prisma) => {
      return prisma.orders.findUnique({
        where: {
          order_id: order_id,
        },
        include: {
          users: true,
          caregivers: true,
        },
      });
    });

    res.json(selectedOrder);
  } catch (error) {
    res.status(500).json({ error: `An error occurred ${error}` });
  }
};
