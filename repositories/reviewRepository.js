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

export async function getReviewsByOrderId(orderId) {
  const reviews = await withPrisma(async (prisma) => {
    return prisma.reviews.findUnique({
      where: {
        order_id: orderId,
      },
    });
  });

  return reviews;
}

export async function getAllReviewsOrder() {
  const reviews = await withPrisma(async (prisma) => {
    return prisma.reviews.findMany();
  });
  return reviews;
}

export async function calculateAggregateRating(orderId) {
  const order = await withPrisma(async (prisma) => {
    return prisma.reviews.findMany({
      where: {
        order_id: orderId,
      },
    });
  });

  if (!order) {
    throw new Error("Order not found");
  }

  return order[0].review_rating
}