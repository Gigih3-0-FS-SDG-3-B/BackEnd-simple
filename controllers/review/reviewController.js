import * as reviewRepository from "../../repositories/reviewRepository.js";

export const createReviewController = async (req, res) => {
  try {
    const orderId = req.query.order_id;
    const { review, review_rating } = req.body;
    if (review_rating < 0 || review_rating > 5) {
      res.status(500).json({ error: `An error occurred ${error}` });
    }

    const newReview = await reviewRepository.createReview(
      orderId,
      review,
      review_rating
    );

    res.json(newReview);
  } catch (error) {
    res.status(500).json({ error: `An error occurred ${error}` });
  }
};

export async function getReviewsController(req, res) {
  try {
    const orderId = req.query.order_id;
    const caregiverId = req.query.caregiver_id;

    if (orderId) {
      const reviews = await reviewRepository.getReviewsByOrderId(orderId);
      res.status(200).json(reviews);
    } else if (caregiverId) {
      const reviews = await reviewRepository.getCaregiverReviews(caregiverId);
      res.status(200).json(reviews);
    } else {
      res.status(400).json({ error: "Missing orderId or caregiverId in the request" });
    }

  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
