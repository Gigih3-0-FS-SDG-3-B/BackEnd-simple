import { withPrisma } from "../middlewares/prismaMiddleware.js";

export async function getReviewsForOrder(orderId) {
  const reviews = await withPrisma(async (prisma) => {
    return prisma.reviews.findMany({
      where: {
        order_id: orderId,
      },
      include: {
        user: true, 
      },
    });
  });

  return reviews;
}
