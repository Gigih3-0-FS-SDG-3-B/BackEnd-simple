import { withPrisma } from "../middlewares/prismaMiddleware.js";

export async function getScheduleForOrder(orderId) {
  const schedule = await withPrisma(async (prisma) => {
    return prisma.schedule.findMany({
      where: {
        order_id: orderId,
      },
    });
  });

  return schedule;
}
