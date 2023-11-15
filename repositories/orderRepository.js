import { withPrisma } from "../middlewares/prismaMiddleware.js";
import { v4 as uuidv4 } from "uuid";

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