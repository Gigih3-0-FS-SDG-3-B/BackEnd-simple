import { withPrisma } from "../middlewares/prismaMiddleware.js";

export async function calculateAggregateRating(orderId) {
  const order = await withPrisma(async (prisma) => {
    return prisma.reviews.findMany({
      where: {
        order_id: orderId,
      },
    });
  });

  console.log(orderId)
  console.log(order)

  if (!order) {
    throw new Error("Order not found");
  }

  return order[0].review_rating

  // const reviews = order.review;

  // if (!reviews || reviews.length === 0) {
  //   return 0; // Jika tidak ada ulasan, rata-rata peringkat adalah 0.
  // }

  // // Menghitung rata-rata peringkat dari ulasan
  // const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  // const averageRating = totalRating / reviews.length;

  // return averageRating;
}
