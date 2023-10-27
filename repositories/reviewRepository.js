import { withPrisma } from "../middlewares/prismaMiddleware.js";

export async function createReview(orderId, review, reviewRating) {
  return await withPrisma(async (prisma) => {
    return prisma.reviews.create({
      data: {
        order_id: orderId,
        review: review,
        review_rating: reviewRating,
      },
    });
  });
}
