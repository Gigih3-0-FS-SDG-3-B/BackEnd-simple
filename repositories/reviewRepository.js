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

export async function getReviewByCaregiverId(caregiverId) {
  return await withPrisma(async (prisma) => {
    const orders = await prisma.orders.findMany({
      where: {
        caregiver_id: caregiverId,
      },
      include: {
        users: true,
      },
    });
    const orderIds = orders.map((order) => order.order_id);
    const reviewsData = await prisma.reviews.findMany({
      where: {
        order_id: {
          in: orderIds,
        },
      },
      include: {
        orders: {
          include: {
            users: true,
          },
        },
      },
    });
    return reviewsData.map((review) => {
      const reviewJSON = {
        ...review,
        user_id: review.orders.user_id,
        profile_picture_url: review.orders.users.profile_picture_url,
        first_name: review.orders.users.first_name,
        last_name: review.orders.users.last_name,
      };
      delete reviewJSON.orders;
      return reviewJSON;
    });
  });
}
