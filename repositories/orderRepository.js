import { withPrisma } from "../middlewares/prismaMiddleware.js";
import { v4 as uuidv4 } from "uuid";
import { ORDER_STATUS } from "../enums/orderStatusEnum.js";

export async function createOrder(orderData) {
  const newOrder = await withPrisma(async (prisma) => {
    const {
      caregiver_id,
      user_id,
      date_start,
      date_end,
      price,
      address,
      serviceIds,
    } = orderData;
    return await prisma.orders.create({
      data: {
        order_id: uuidv4(),
        caregiver_id: caregiver_id,
        user_id: user_id,
        order_status: 0,
        date_start: new Date(date_start).toISOString(),
        date_end: new Date(date_end).toISOString(),
        price: price,
        address: address,
        order_to_services: {
          create: serviceIds.map((serviceId) => ({
            service_id: serviceId,
          })),
        },
      },
      include: {
        order_to_services: {
          select: {
            service_id: true,
          },
        },
      },
    });
  });
  const serviceIdsArray = newOrder.order_to_services.map(
    (service) => service.service_id
  );
  delete newOrder.order_to_services;
  return { ...newOrder, serviceIds: serviceIdsArray };
}

export async function getOrder(orderId) {
  return withPrisma(async (prisma) => {
    return prisma.orders.findUnique({
      where: {
        order_id: orderId,
      },
      include: {
        users: true,
        caregivers: true,
      },
    });
  });
}

export async function getOrdersByCaregiverId(caregiverId) {
  return withPrisma(async (prisma) => {
    return prisma.orders.findMany({
      where: {
        caregiver_id: caregiverId
      },
    });
  });
}

export async function getAllOrderByUserId(userId) {
  const user = await withPrisma(async (prisma) => {
    return prisma.users.findUnique({
      where: {
        user_id: userId,
      },
      include: {
        orders: true,
      },
    });
  });

  return user.orders;
}

export async function updateOrder(orderId, orderData) {
  const { order_status, date_start, date_end, price, address } = orderData;
  return await withPrisma(async (prisma) => {
    return prisma.orders.update({
      where: {
        order_id: orderId,
      },
      data: {
        order_status: order_status,
        date_start: date_start
          ? new Date(date_start).toISOString()
          : undefined,
        date_end: date_end ? new Date(date_end).toISOString() : undefined,
        price: price,
        address: address,
      },
    });
  });
}


// It's not good idea to construct date in repository, but I don't know how to do it in Prisma best practice
// Ideally, we should do pass the exact date from controller to repository, and do the date comparison in repository
// The query should be like this:
// Select * from orders where order_status = 400 and date_start = "2023-11-12"
export async function getTodayPaymentSuccessVisits() {
  const today = new Date();
  const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 0).toISOString();
  const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59, 999).toISOString();
  return await withPrisma(async (prisma) => {
    return prisma.orders.findMany({
      where: {
        order_status: ORDER_STATUS.PAYMENT_SUCCESS,
        date_start: {
          gte: startOfDay,
          lt: endOfDay
        }
      },
    });
  });
}

// It's not good idea to construct date in repository, but I don't know how to do it in Prisma best practice
// Ideally, we should do pass the exact date from controller to repository, and do the date comparison in repository
// The query should be like this:
// Select * from orders where order_status = 500 and date_end = "2023-11-11"
export async function getOngoingOrdersWithYesterdayEnd() {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const startOfDay = new Date(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate(), 0, 0, 0, 0).toISOString();
  const endOfDay = new Date(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate(), 23, 59, 59, 999).toISOString();
  return await withPrisma(async (prisma) => {
    return prisma.orders.findMany({
      where: {
        order_status: ORDER_STATUS.ON_GOING,
        date_end: {
          gte: startOfDay,
          lt: endOfDay
        }
      },
    });
  });
}