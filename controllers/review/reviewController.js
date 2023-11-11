import { createReview } from "../../repositories/reviewRepository.js";
import { withPrisma } from "../../middlewares/prismaMiddleware.js";
export const createReviewController = async (req, res) => {
  try {
    const orderId = req.params.order_id;
    const { review, review_rating } = req.body;

    if (review_rating < 0 || review_rating > 5) {
      res.status(500).json({ error: `An error occurred ${error}` });
    }

    const newReview = await createReview(orderId, review, review_rating);

    res.json(newReview);
  } catch (error) {
    res.status(500).json({ error: `An error occurred ${error}` });
  }
};
export const getReviewsDetailForOrderController = async (req, res) => {
  try {
    const orderId = req.params.order_id;
    const { review, review_rating } = req.body;

    if (review_rating < 0 || review_rating > 5) {
      res.status(500).json({ error: `An error occurred ${error}` });
    }

    const newReview = await createReview(orderId, review, review_rating);

    res.json(newReview);
  } catch (error) {
    res.status(500).json({ error: `An error occurred ${error}` });
  }
};



export const getReviewsForOrderController2 = async (req, res) => {
  try {
    const reviews = await withPrisma(async (prisma) => {
      return prisma.reviews.findMany();
    });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: `An error occurred ${error}` });
  }
};