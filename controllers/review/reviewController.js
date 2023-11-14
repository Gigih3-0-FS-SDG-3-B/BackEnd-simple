import { createReview } from "../../repositories/reviewRepository.js";
import { getReviewsByOrderId } from "../../repositories/reviewRepository.js"; 

export const createReviewController = async (req, res) => {
  try {
    const { orderId } = req.query.order_id;
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

export async function getReviewsByOrderIdController(req, res) {
  try {
    const orderId = req.query.order_id;
    const reviews = await getReviewsByOrderId(orderId);

    res.status(200).json({ ...reviews });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
