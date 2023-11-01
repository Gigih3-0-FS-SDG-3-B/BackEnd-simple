import { withPrisma } from "../middlewares/prismaMiddleware.js";

export async function calculateAggregateRating(orderId) {
  const order = await withPrisma(async (prisma) => {
    return prisma.orders.findUnique({
      where: {
        order_id: orderId,
      },
      include: {
        reviews: {
          select: {
            rating: true,
          },
        },
      },
    });
  });

  if (!order) {
    throw new Error("Order not found");
  }

  const reviews = order.reviews;

  if (!reviews || reviews.length === 0) {
    return 0; 
  }

  // Menghitung rata-rata peringkat dari ulasan
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating = totalRating / reviews.length;

  return averageRating;
}

