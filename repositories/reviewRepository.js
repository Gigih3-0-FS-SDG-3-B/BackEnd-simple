import { withPrisma } from "../middlewares/prismaMiddleware.js";
import { getOrder } from "./orderRepository.js";
import { REVIEW_PERIOD_DAYS_AFTER_CHECKOUT } from "../enums/reviewEnum.js";

export async function createReview(orderId, review, reviewRating) {
  const order = await getOrder(orderId);

  const today = new Date();
  const sevenDaysAfterEnd = new Date(order.date_end);
  sevenDaysAfterEnd.setDate(
    sevenDaysAfterEnd.getDate() + REVIEW_PERIOD_DAYS_AFTER_CHECKOUT
  );

  if (today > sevenDaysAfterEnd) {
    throw new Error("Review Period has passed");
  }

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
