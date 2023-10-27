import { withPrisma } from "../middlewares/prismaMiddleware.js";

export async function createServiceRates(serviceId, servicePrice) {
  return await withPrisma(async (prisma) => {
    return prisma.service_rates.create({
      data: {
        service_id: Number(serviceId),
        service_price: Number(servicePrice),
      },
    });
  });
}

export async function getCurrentServiceRates(serviceId) {
  return await withPrisma(async (prisma) => {
    return prisma.service_rates.findFirst({
      where: {
        service_id: serviceId,
      },
      orderBy: {
        created_at: "desc", // Order by created_at in descending order (latest first)
      },
    });
  });
}
